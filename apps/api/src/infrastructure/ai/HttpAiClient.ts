import type { AiServicePort } from "../../application/aiHealth/ports/AiServicePort.ts";

export class HttpAiClient implements AiServicePort {
    constructor(
        private readonly baseUrl: string,
        private readonly internalSecret: string,
    ) { }

    async checkHealth(): Promise<boolean> {
        try {
            const response = await fetch(`${this.baseUrl}/health`, {
                headers: { "X-Internal-Secret": this.internalSecret },
            });
            return response.ok;
        } catch {
            return false;
        }
    }
}