import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/stream", async (req, res) => {
    const { model, messages } = req.body;

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    try {
        const ollamaStream = await axios({
            method: "POST",
            url: process.env.AI_API_URL + "/api/chat",
            data: {
                model,
                messages,
                stream: true,
            },
            responseType: "stream",
        });

        ollamaStream.data.on("data", (chunk) => {
            res.write(`data: ${chunk.toString()}\n\n`);
        });

        ollamaStream.data.on("end", () => {
            res.write("data: [DONE]\n\n");
            res.end();
        });

        ollamaStream.data.on("error", (err) => {
            res.write(`data: ERROR: ${err.message}\n\n`);
            res.end();
        });
    } catch (err) {
        console.error(err);
        res.write(`data: ERROR: ${err.message}\n\n`);
        res.end();
    }
});

export default router;
