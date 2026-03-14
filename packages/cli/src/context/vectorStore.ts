// Simple in-memory vector store for file embeddings

export interface VectorEntry {
  file: string;
  embedding: number[];
}

export class VectorStore {
  vectors: VectorEntry[] = [];

  add(file: string, embedding: number[]) {
    this.vectors.push({ file, embedding });
  }

  // Cosine similarity between two vectors
  static cosine(a: number[], b: number[]): number {
    let sum = 0;
    let magA = 0;
    let magB = 0;
    for (let i = 0; i < a.length; i++) {
      sum += a[i] * b[i];
      magA += a[i] * a[i];
      magB += b[i] * b[i];
    }
    return sum / (Math.sqrt(magA) * Math.sqrt(magB));
  }

  // Search for top N most similar vectors to the query embedding
  search(queryEmbedding: number[], topN = 5): VectorEntry[] {
    return this.vectors
      .map(entry => ({
        ...entry,
        similarity: VectorStore.cosine(queryEmbedding, entry.embedding)
      }))
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, topN);
  }
}
