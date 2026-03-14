export function extractErrors(log: string): string {
  const lines = log.split("\n");
  const errors = lines.filter(line =>
    line.toLowerCase().includes("error")
  );
  return errors.slice(0, 20).join("\n");
}
