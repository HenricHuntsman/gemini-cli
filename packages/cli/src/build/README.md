# Build & Error Detection

This module enables the CLI to run project build commands, capture errors, and feed them to the AI for diagnosis and fixes.

## Files
- `buildRunner.ts`: Runs the build command (default: `npm run build`).
- `errorParser.ts`: Extracts error lines from build output.
- `buildCommands.ts`: Implements `repoFix` to run build, extract errors, and prompt the AI for fixes.

## Usage
- Use `runBuild()` to execute the build and get output.
- Use `extractErrors(log)` to get error lines from build output.
- Use `repoFix(provider, config)` to run the full fix workflow.

## Next Steps
- Add CLI command: `ripdown repo fix` to trigger this workflow.
- Expand build detection to support other build systems (pnpm, yarn, cargo, go, pytest, etc).
- Add patch engine for automated fixes.
- Add safety checks and backup before applying patches.
