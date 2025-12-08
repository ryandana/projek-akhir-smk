export default function previewText(body) {
    const limit = 100;
    return body.length > limit ? body.slice(0, limit) + "..." : body;
}