# Smart Repo Context (Embeddings)

This module provides embedding-based context search for the CLI.

## Files
- `embedding.ts`: Generates text embeddings using Ollama (nomic-embed-text).
- `vectorStore.ts`: In-memory vector store for file embeddings, with cosine similarity search.
- `contextSearch.ts`: Finds most relevant files for a query using embeddings and the vector store.

## Usage
- Use `embed(text)` to get an embedding for any string.
- Use `VectorStore` to add file embeddings and search for relevant files.
- Use `searchRelevantFiles(query, vectorStore, topN)` to get the top-N relevant files for a user query.

## Next Steps
- Integrate with repo scanner to build and persist an index.
- Add CLI commands: `repo index`, `repo search <query>`.
- Store index in `~/.ripdown/index/<repo>/vectors.json` for fast lookup.
- Filter out large/binary/ignored files in scanner.
