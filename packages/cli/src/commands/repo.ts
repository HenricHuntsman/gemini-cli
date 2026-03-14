import type { CommandModule } from 'yargs';
import { repoScan, explainFile, repoMap } from '../repo/repoCommands.js';
import { repoFix } from '../build/buildCommands.js';

export const repoCommand: CommandModule = {
  command: 'repo <action> [file] [query] [options..]',
  describe: 'Repo-aware commands: scan, explain, fix, index, search',
  builder: (yargs) =>
    yargs
      .command({
        command: 'scan',
        describe: 'Scan and list repository files',
        handler: async () => {
          await repoScan();
        },
      })
      .command({
        command: 'map',
        describe: 'Generate and save a project repo map',
        handler: async () => {
          const project = process.cwd().split("/").pop() || "project";
          await repoMap(project);
        },
      })
      .command({
        command: 'explain <file>',
        describe: 'Explain a file in the repo',
        handler: async (argv) => {
          const result = await explainFile(argv.file as string);
          console.log(result);
        },
      })
      .command({
        command: 'fix',
        describe: 'Run build and diagnose errors',
        handler: async (argv) => {
          // Provider/config resolution should be centralized
          const { resolveRuntimeConfig } = await import('../config/runtimeConfig.js');
          const { getProvider } = await import('../providers/providerFactory.js');
          const config = resolveRuntimeConfig(argv);
          const provider = getProvider(config.provider, { ollamaUrl: config.ollamaUrl });
          await repoFix(provider, config);
        },
      })
      // TODO: index, search, context commands
      .demandCommand(1, 'You need at least one repo action.'),
  handler: () => {},
};
