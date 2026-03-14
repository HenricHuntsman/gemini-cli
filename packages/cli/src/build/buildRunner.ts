import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

export async function runBuild(): Promise<{ success: boolean; output: string }> {
  try {
    const { stdout } = await execAsync("npm run build");
    return { success: true, output: stdout };
  } catch (err: any) {
    return {
      success: false,
      output: err.stdout || err.stderr || String(err)
    };
  }
}
