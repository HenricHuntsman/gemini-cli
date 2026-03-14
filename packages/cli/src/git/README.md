# Git Awareness & Automation

This module enables the CLI to understand and automate git operations for AI-powered code review, explanation, and patching.

## Files
- `gitRunner.ts`: Runs git commands and retrieves status/diff.
- `gitCommands.ts`: Implements summarize, explain, and review workflows using the provider.
- `diffParser.ts`: Placeholder for future diff parsing utilities.

## Usage
- Use `runGit(cmd)` to run any git command and get output.
- Use `getGitStatus()` and `getGitDiff()` for repo state and changes.
- Use `gitSummarize`, `gitExplain`, and `gitReview` to drive AI-powered workflows.

## Next Steps
- Add CLI commands: `ripdown git summarize`, `ripdown git explain <commit>`, `ripdown git review`.
- Integrate with patch engine for `git fix` and commit message generation.
- Add safety checks before applying AI-generated patches.
