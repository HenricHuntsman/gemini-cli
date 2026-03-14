// ProviderFactory: Returns the correct provider based on config/args
import { OllamaProvider } from './ollamaProvider.js';
import { GeminiProvider } from './geminiProvider.js';

export function getProvider(providerName: string, opts?: { ollamaUrl?: string }) {
  switch (providerName.toLowerCase()) {
    case 'ollama':
      return new OllamaProvider(opts?.ollamaUrl);
    case 'gemini':
      return new GeminiProvider();
    default:
      throw new Error(`Unknown provider: ${providerName}`);
  }
}
