import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function runGit(cmd: string): Promise<string> {
  const { stdout } = await execAsync(`git ${cmd}`);
  return stdout;
}

export async function getGitStatus(): Promise<string> {
  return await runGit("status --short");
}

export async function getGitDiff(): Promise<string> {
  return await runGit("diff");
}
