import fs from "fs";
import { backupFile } from "./backupManager.js";

export function applyPatch(file: string, newContent: string): string {
  const backup = backupFile(file);
  fs.writeFileSync(file, newContent);
  return backup;
}
