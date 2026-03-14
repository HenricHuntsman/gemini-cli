import fs from 'fs';
import path from 'path';

const IGNORED_DIRS = ['node_modules', '.git', 'dist', 'build'];

export function scanRepo(root: string): string[] {
  const files: string[] = [];
  function walk(dir: string) {
    const entries = fs.readdirSync(dir);
    for (const entry of entries) {
      const full = path.join(dir, entry);
      const stat = fs.statSync(full);
      if (stat.isDirectory()) {
        if (IGNORED_DIRS.some((ignore) => full.includes(ignore))) continue;
        walk(full);
      } else {
        files.push(full);
      }
    }
  }
  walk(root);
  return files;
}
