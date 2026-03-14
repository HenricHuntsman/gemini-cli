import fs from "fs";
import path from "path";
import { getProjectPath } from "./memoryManager";

const ERRORS_FILE = "errors.json";

export function saveErrors(project: string, errors: string[]) {
  const file = path.join(getProjectPath(project), ERRORS_FILE);
  fs.writeFileSync(file, JSON.stringify({ last_errors: errors }, null, 2));
}

export function loadErrors(project: string): string[] {
  const file = path.join(getProjectPath(project), ERRORS_FILE);
  if (!fs.existsSync(file)) return [];
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  return data.last_errors || [];
}
