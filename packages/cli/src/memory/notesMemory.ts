import fs from "fs";
import path from "path";
import { getProjectPath } from "./memoryManager";

const NOTES_FILE = "notes.md";

export function saveNotes(project: string, notes: string) {
  const file = path.join(getProjectPath(project), NOTES_FILE);
  fs.writeFileSync(file, notes);
}

export function loadNotes(project: string): string {
  const file = path.join(getProjectPath(project), NOTES_FILE);
  if (!fs.existsSync(file)) return "";
  return fs.readFileSync(file, "utf8");
}
