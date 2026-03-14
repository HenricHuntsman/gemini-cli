// Centralized runtime config resolver for CLI
export function resolveRuntimeConfig(argv: any) {
  return {
    provider:
      argv.provider ||
      process.env.RIPDOWN_PROVIDER ||
      'ollama',
    model:
      argv.model ||
      process.env.RIPDOWN_MODEL ||
      'llama3.2',
    ollamaUrl:
      argv.ollamaUrl ||
      process.env.RIPDOWN_OLLAMA_URL ||
      'http://127.0.0.1:11434',
    stream: argv.stream || false,
  };
}
