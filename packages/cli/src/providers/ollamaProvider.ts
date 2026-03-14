// OllamaProvider: Implements the provider interface for Ollama LLM
import fetch from 'node-fetch';
import { ModelProvider, ProviderGenerateOptions } from './modelProvider.js';

  name = 'ollama';
  baseUrl: string;
  constructor(baseUrl = 'http://localhost:11434') {
    this.baseUrl = baseUrl;
  }

  async generate(prompt: string, opts?: ProviderGenerateOptions): Promise<string> {
    const model = opts?.model || 'llama3';
    const res = await fetch(`${this.baseUrl}/api/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model, prompt, stream: false })
    });
    if (!res.ok) throw new Error(`Ollama error: ${res.statusText}`);
    const data = await res.json();
    return data.response || '';
  }

  async *generateStream(prompt: string, opts?: ProviderGenerateOptions): AsyncGenerator<string> {
    const model = opts?.model || 'llama3';
    const res = await fetch(`${this.baseUrl}/api/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model, prompt, stream: true })
    });
    if (!res.ok || !res.body) throw new Error(`Ollama error: ${res.statusText}`);
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value);
      let lines = buffer.split('\n');
      buffer = lines.pop() || '';
      for (const line of lines) {
        if (!line.trim()) continue;
        try {
          const data = JSON.parse(line);
          if (data.response) {
            yield data.response;
          }
        } catch {}
      }
    }
  }

  async listModels(): Promise<string[]> {
    const res = await fetch(`${this.baseUrl}/api/tags`);
    if (!res.ok) throw new Error(`Ollama error: ${res.statusText}`);
    const data = await res.json();
    return (data.models || []).map((m: any) => m.name);
  }

  async healthCheck(): Promise<boolean> {
    try {
      const res = await fetch(`${this.baseUrl}/api/tags`);
      return res.ok;
    } catch {
      return false;
    }
  }
}
