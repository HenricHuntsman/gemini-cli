// Context search using embeddings and vector store

import { embed } from "./embedding";
import { VectorStore, VectorEntry } from "./vectorStore";

export async function searchRelevantFiles(
  query: string,
  vectorStore: VectorStore,
  topN = 5
): Promise<VectorEntry[]> {
  const queryEmbedding = await embed(query);
  return vectorStore.search(queryEmbedding, topN);
}
