import readline from 'readline';
import { getProvider } from '../providers/providerFactory.js';
import { resolveRuntimeConfig } from '../config/runtimeConfig.js';

export async function startChat(argv: any) {
  const config = resolveRuntimeConfig(argv);
  const provider = getProvider(config.provider, { ollamaUrl: config.ollamaUrl });
  const model = config.model;
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  console.log('ripdown chat started (type "exit" to quit)');
  const history: { role: string; content: string }[] = [];
  while (true) {
    const prompt = await new Promise<string>((resolve) => {
      rl.question('You: ', resolve);
    });
    if (prompt === 'exit') break;
    if (prompt === '/reset') {
      history.length = 0;
      console.log('Conversation reset');
      continue;
    }
    history.push({ role: 'user', content: prompt });
    if (provider.generateStream) {
      process.stdout.write('AI: ');
      for await (const token of provider.generateStream(prompt, { model })) {
        process.stdout.write(token);
      }
      process.stdout.write('\n\n');
    } else {
      const response = await provider.generate(prompt, { model });
      console.log('AI:', response, '\n');
    }
    history.push({ role: 'assistant', content: '' }); // Optionally store response
  }
  rl.close();
}
