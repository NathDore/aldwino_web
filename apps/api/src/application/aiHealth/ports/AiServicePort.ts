export interface AiServicePort {
    checkHealth(): Promise<boolean>;
}