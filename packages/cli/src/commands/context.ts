import type { CommandModule } from 'yargs';
import { searchRelevantFiles } from '../context/contextSearch.js';
import { VectorStore } from '../context/vectorStore.js';
import fs from 'fs';

export const contextCommand: CommandModule = {
  command: 'context search <query>',
  describe: 'Search repo for relevant files using embeddings',
  builder: (yargs) =>
    yargs
      .command({
        command: 'search <query>',
        describe: 'Find top relevant files for a query',
        handler: async (argv) => {
          // Load vector store from disk (TODO: persist/load from ~/.ripdown/index/<repo>)
          const vectorStore = new VectorStore();
          // Example: load vectors from a JSON file if exists
          const indexPath = `${process.env.HOME}/.ripdown/index/vectors.json`;
          if (fs.existsSync(indexPath)) {
            const data = JSON.parse(fs.readFileSync(indexPath, 'utf8'));
            for (const entry of data) {
              vectorStore.add(entry.file, entry.embedding);
            }
          } else {
            console.log('No index found. Run `ripdown repo index` first.');
            return;
          }
          const results = await searchRelevantFiles(argv.query as string, vectorStore, 5);
          console.log('Top relevant files:');
          for (const entry of results) {
            console.log(entry.file);
          }
        },
      })
      .demandCommand(1, 'You need at least one context action.'),
  handler: () => {},
};
