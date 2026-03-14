import { scanRepo } from "./repoScanner";
import { saveRepoMap } from "./repoMap";

export async function repoMap(project: string) {
  const files = scanRepo(process.cwd());
  saveRepoMap(project, files);
  console.log("Repo map generated:");
  console.log(files.join("\n"));
}
