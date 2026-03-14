import fs from "fs";
import { detectFramework } from "./frameworkDetector";
import { detectBuildSystem } from "./buildDetector";

export function detectLanguage(): string {
  if (fs.existsSync("tsconfig.json")) return "TypeScript";
  if (fs.existsSync("package.json")) return "JavaScript";
  if (fs.existsSync("pyproject.toml")) return "Python";
  if (fs.existsSync("Cargo.toml")) return "Rust";
  if (fs.existsSync("go.mod")) return "Go";
  return "Unknown";
}

export function detectProject() {
  return {
    language: detectLanguage(),
    framework: detectFramework(),
    build: detectBuildSystem()
  };
}
