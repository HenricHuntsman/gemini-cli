# Project Detection

This module provides automatic detection of project language, framework, and build system for the CLI.

## Files
- `projectDetector.ts`: Detects language and combines results from framework and build detectors.
- `frameworkDetector.ts`: Detects common frameworks from package.json dependencies.
- `buildDetector.ts`: Detects build system from config files.

## Usage
- Use `detectProject()` to get an object with `language`, `framework`, and `build` fields.
- Use this info to inject project context into prompts for better AI answers.

## Next Steps
- Add CLI command: `ripdown project info` to print detected project info.
- Cache detection results in `~/.ripdown/project-info.json` for performance.
- Inject project context automatically into all relevant prompts.
