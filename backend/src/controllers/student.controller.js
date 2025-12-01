import { User, Class } from "../models/user.model.js";

export const getStudentsByClass = async (req, res) => {
    try {
        const { classId } = req.params;

        const kelas = await Class.findById(classId);
        if (!kelas) {
            return res.status(404).json({ message: "Class not found" });
        }

        const students = await User.find({ role: "student", classId });

        return res.status(200).json({
            message: `Students for class ${kelas.className}`,
            count: students.length,
            students,
        });
    } catch (error) {
        console.error(error.message);
        return res.status(500).json({ message: "Internal server error" });
    }
};
