import fs from "fs";

export function backupFile(file: string): string {
  const backup = file + ".ripdown.bak";
  fs.copyFileSync(file, backup);
  return backup;
}

export function rollback(file: string, backup: string) {
  fs.copyFileSync(backup, file);
  console.log("Patch reverted due to build failure.");
}
