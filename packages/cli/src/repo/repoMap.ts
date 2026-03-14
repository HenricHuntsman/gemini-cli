import fs from "fs";
import path from "path";
import { getProjectPath } from "../memory/memoryManager";

export function saveRepoMap(project: string, files: string[]) {
  const file = path.join(getProjectPath(project), "repo-map.json");
  fs.writeFileSync(file, JSON.stringify(files, null, 2));
}
