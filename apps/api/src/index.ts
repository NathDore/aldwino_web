import express from "express";

const PORT = process.env.PORT ?? 4287;

const app = express();

app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
});

app.listen(PORT, () => {
    console.log(`api listening on port ${PORT}`);
});