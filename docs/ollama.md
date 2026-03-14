# Ollama Integration for gemini-cli

This document describes how to add Ollama support to the gemini-cli project while keeping all existing functionality intact.

## Steps to Add Ollama

1. **Install Ollama**
   - Follow the official instructions at https://ollama.com/download to install Ollama on your system.

2. **Add Ollama as a Model Provider**
   - Update the codebase to support Ollama as an additional model provider.
   - Ensure the CLI can select Ollama via a flag or config (e.g., `--provider ollama`).
   - Implement API calls to the local Ollama server (default: `http://localhost:11434`), following the [Ollama API docs](https://github.com/jmorganca/ollama/blob/main/docs/api.md).

3. **Preserve Existing Functionality**
   - Do not remove or break support for Gemini or any other providers.
   - Ensure all existing commands and options continue to work as before.

4. **Testing**
   - Add or update tests to cover Ollama integration.
   - Test with both Gemini and Ollama to verify compatibility.

5. **Documentation**
   - Update README and CLI help output to mention Ollama support.
   - Document any new flags or configuration options.

## Example Usage

```
gemini-cli --provider ollama --model llama2 "Your prompt here"
```

## Notes
- Ollama must be running locally for requests to succeed.
- You can list available models with `curl http://localhost:11434/api/tags`.
