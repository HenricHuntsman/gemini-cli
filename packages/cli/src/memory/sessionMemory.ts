import fs from "fs";
import path from "path";
import { getProjectPath } from "./memoryManager";

export function saveSession(project: string, data: any) {
  const file = path.join(getProjectPath(project), "session.json");
  fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

export function loadSession(project: string) {
  const file = path.join(getProjectPath(project), "session.json");
  if (!fs.existsSync(file)) return {};
  return JSON.parse(fs.readFileSync(file, "utf8"));
}
