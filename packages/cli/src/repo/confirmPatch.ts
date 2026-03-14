import readline from "readline";

export async function confirmPatch(): Promise<boolean> {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  return new Promise(resolve => {
    rl.question("Apply patch? (y/n) ", answer => {
      rl.close();
      resolve(answer.trim().toLowerCase() === "y");
    });
  });
}
