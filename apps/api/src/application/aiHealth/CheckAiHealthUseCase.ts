import type { AiServicePort } from "./ports/AiServicePort.ts";

export class CheckAiHealthUseCase {
    constructor(private readonly aiService: AiServicePort) { }

    async execute(): Promise<{ aiReachable: boolean }> {
        const aiReachable = await this.aiService.checkHealth();
        return { aiReachable };
    }
}