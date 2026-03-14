// GeminiProvider: wraps Gemini logic to fit ModelProvider interface
import { ModelProvider, ProviderGenerateOptions } from './modelProvider.js';

export class GeminiProvider implements ModelProvider {
  name = 'gemini';
  // Add any needed config or API keys here
  constructor(/* config */) {}

  async generate(prompt: string, opts?: ProviderGenerateOptions): Promise<string> {
    // TODO: Call Gemini API here using opts.model if provided
    throw new Error('GeminiProvider.generate() not yet implemented');
  }

  async listModels(): Promise<string[]> {
    // TODO: List available Gemini models
    return ['gemini-pro', 'gemini-1.5-pro'];
  }

  async healthCheck(): Promise<boolean> {
    // TODO: Implement Gemini health check
    return true;
  }
}
