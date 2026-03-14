// Common provider interface for all LLM backends

export interface ProviderGenerateOptions {
  model?: string;
  [key: string]: any;
}

  name: string;
  generate(prompt: string, opts?: ProviderGenerateOptions): Promise<string>;
  generateStream?(prompt: string, opts?: ProviderGenerateOptions): AsyncGenerator<string>;
  listModels?(): Promise<string[]>;
  healthCheck?(): Promise<boolean>;
}
