import fs from "fs";
import path from "path";
import { getProjectPath } from "./memoryManager";

const REPO_MAP_FILE = "repo-map.json";

export interface RepoMap {
  files: string[];
}

export function saveRepoMap(project: string, map: RepoMap) {
  const file = path.join(getProjectPath(project), REPO_MAP_FILE);
  fs.writeFileSync(file, JSON.stringify(map, null, 2));
}

export function loadRepoMap(project: string): RepoMap {
  const file = path.join(getProjectPath(project), REPO_MAP_FILE);
  if (!fs.existsSync(file)) return { files: [] };
  return JSON.parse(fs.readFileSync(file, "utf8"));
}
