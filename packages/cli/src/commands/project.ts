import type { CommandModule } from 'yargs';
import { detectProject } from '../project/projectDetector.js';

export const projectCommand: CommandModule = {
  command: 'project info',
  describe: 'Detect and print project language, framework, and build system',
  builder: (yargs) =>
    yargs
      .command({
        command: 'info',
        describe: 'Show detected project info',
        handler: async () => {
          const project = detectProject();
          console.log('Project detected:');
          console.log(`Language: ${project.language}`);
          console.log(`Framework: ${project.framework}`);
          console.log(`Build: ${project.build}`);
        },
      })
      .demandCommand(1, 'You need at least one project action.'),
  handler: () => {},
};
