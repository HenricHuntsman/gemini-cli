import fs from 'fs';

export function buildRepoContext(files: string[]): string {
  return files.slice(0, 50).map(f => `FILE: ${f}`).join('\n');
}
