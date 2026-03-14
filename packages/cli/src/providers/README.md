# Providers Directory

This folder contains provider interfaces and implementations for LLM backends (e.g., Ollama, Gemini).

- `ollamaProvider.ts`: Ollama LLM provider implementation.
- `providerFactory.ts`: Factory to select the correct provider at runtime.

To add a new provider:
1. Implement the `LLMProvider` interface.
2. Add it to the factory.
3. Update CLI/config to allow selection.
