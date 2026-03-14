import type { CommandModule } from 'yargs';
import { gitSummarize, gitExplain, gitReview } from '../git/gitCommands.js';

export const gitCommand: CommandModule = {
  command: 'git <action> [commit]',
  describe: 'Git-aware commands: summarize, explain, review',
  builder: (yargs) =>
    yargs
      .command({
        command: 'summarize',
        describe: 'Summarize recent commits',
        handler: async (argv) => {
          const { resolveRuntimeConfig } = await import('../config/runtimeConfig.js');
          const { getProvider } = await import('../providers/providerFactory.js');
          const config = resolveRuntimeConfig(argv);
          const provider = getProvider(config.provider, { ollamaUrl: config.ollamaUrl });
          await gitSummarize(provider, config);
        },
      })
      .command({
        command: 'explain <commit>',
        describe: 'Explain a commit or diff',
        handler: async (argv) => {
          const { resolveRuntimeConfig } = await import('../config/runtimeConfig.js');
          const { getProvider } = await import('../providers/providerFactory.js');
          const config = resolveRuntimeConfig(argv);
          const provider = getProvider(config.provider, { ollamaUrl: config.ollamaUrl });
          await gitExplain(argv.commit as string, provider, config);
        },
      })
      .command({
        command: 'review',
        describe: 'AI code review of current changes',
        handler: async (argv) => {
          const { resolveRuntimeConfig } = await import('../config/runtimeConfig.js');
          const { getProvider } = await import('../providers/providerFactory.js');
          const config = resolveRuntimeConfig(argv);
          const provider = getProvider(config.provider, { ollamaUrl: config.ollamaUrl });
          await gitReview(provider, config);
        },
      })
      .demandCommand(1, 'You need at least one git action.'),
  handler: () => {},
};
