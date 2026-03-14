import fs from "fs";

export function detectFramework(): string | null {
  if (!fs.existsSync("package.json")) return null;
  const pkg = JSON.parse(fs.readFileSync("package.json", "utf8"));
  const deps = {
    ...pkg.dependencies,
    ...pkg.devDependencies
  };
  if (deps.react) return "React";
  if (deps.vue) return "Vue";
  if (deps.svelte) return "Svelte";
  if (deps.next) return "Next.js";
  if (deps.express) return "Express";
  return null;
}
