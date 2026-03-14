export function previewPatch(oldContent: string, newContent: string) {
  console.log("----- Proposed Patch -----");
  const oldLines = oldContent.split("\n");
  const newLines = newContent.split("\n");
  for (let i = 0; i < Math.max(oldLines.length, newLines.length); i++) {
    if (oldLines[i] !== newLines[i]) {
      if (oldLines[i] !== undefined) console.log("- " + oldLines[i]);
      if (newLines[i] !== undefined) console.log("+ " + newLines[i]);
    }
  }
  console.log("--------------------------");
}
