import fs from "fs";

export function detectBuildSystem(): string | null {
  if (fs.existsSync("vite.config.ts")) return "Vite";
  if (fs.existsSync("webpack.config.js")) return "Webpack";
  if (fs.existsSync("rollup.config.js")) return "Rollup";
  if (fs.existsSync("Makefile")) return "Make";
  if (fs.existsSync("Dockerfile")) return "Docker";
  return null;
}
