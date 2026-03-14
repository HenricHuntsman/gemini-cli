import { runGit } from "./gitRunner";

export async function gitSummarize(provider: any, config: any) {
  const log = await runGit("log -5 --oneline");
  const prompt = `\nExplain the recent commits:\n\n${log}\n`;
  const response = await provider.generate(prompt, {
    model: config.model
  });
  console.log(response);
}

export async function gitExplain(commit: string, provider: any, config: any) {
  const diff = await runGit(`show ${commit}`);
  const prompt = `\nExplain this code change:\n\n${diff}\n`;
  const response = await provider.generate(prompt, {
    model: config.model
  });
  console.log(response);
}

export async function gitReview(provider: any, config: any) {
  const diff = await runGit("diff");
  const prompt = `\nReview the following code changes and suggest improvements:\n\n${diff}\n`;
  const response = await provider.generate(prompt, {
    model: config.model
  });
  console.log(response);
}
