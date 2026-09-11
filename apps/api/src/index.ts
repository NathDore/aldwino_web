import express from "express";
import { HttpAiClient } from "./infrastructure/ai/HttpAiClient.ts";
import { CheckAiHealthUseCase } from "./application/aiHealth/CheckAiHealthUseCase.ts";

const PORT = process.env.PORT ?? 4287;

const app = express();

const httpAiClient = new HttpAiClient(
    process.env.AI_SERVICE_URL ?? "http://localhost:8000",
    process.env.AI_INTERNAL_SECRET ?? "",
);
const checkAiHealthUseCase = new CheckAiHealthUseCase(httpAiClient);

app.get("/health/ai", async (_req, res) => {
    const result = await checkAiHealthUseCase.execute();
    res.status(result.aiReachable ? 200 : 503).json(result);
});

app.get("/health", (_req, res) => {
    res.json({ status: "ok" });
});

app.listen(PORT, () => {
    console.log(`api listening on port ${PORT}`);
});