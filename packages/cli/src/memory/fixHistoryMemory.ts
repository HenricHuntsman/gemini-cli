import fs from "fs";
import path from "path";
import { getProjectPath } from "./memoryManager";

const FIX_HISTORY_FILE = "fix-history.json";

export interface FixEntry {
  file: string;
  fix: string;
  date: string;
}

export function saveFixHistory(project: string, history: FixEntry[]) {
  const file = path.join(getProjectPath(project), FIX_HISTORY_FILE);
  fs.writeFileSync(file, JSON.stringify(history, null, 2));
}

export function loadFixHistory(project: string): FixEntry[] {
  const file = path.join(getProjectPath(project), FIX_HISTORY_FILE);
  if (!fs.existsSync(file)) return [];
  return JSON.parse(fs.readFileSync(file, "utf8"));
}
