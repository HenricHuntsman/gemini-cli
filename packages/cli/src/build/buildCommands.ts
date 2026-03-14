import { runBuild } from "./buildRunner";
import { extractErrors } from "./errorParser";

export async function repoFix(provider: any, config: any) {
  const result = await runBuild();
  if (result.success) {
    console.log("Build succeeded — no errors found.");
    return;
  }
  const errors = extractErrors(result.output);
  const prompt = `\nThe following build errors occurred:\n\n${errors}\n\nExplain the problem and suggest a fix.\n`;
  const response = await provider.generate(prompt, {
    model: config.model
  });
  console.log(response);
}
