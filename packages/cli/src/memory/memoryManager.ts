import os from "os";
import path from "path";
import fs from "fs";

const BASE = path.join(os.homedir(), ".ripdown", "projects");

export function getProjectPath(name: string) {
  const dir = path.join(BASE, name);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  return dir;
}
