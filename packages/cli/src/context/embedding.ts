// Embedding generator for text using Ollama local embedding model

export async function embed(text: string): Promise<number[]> {
  const res = await fetch("http://localhost:11434/api/embeddings", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "nomic-embed-text",
      prompt: text
    })
  });

  if (!res.ok) {
    throw new Error(`Embedding request failed: ${res.status} ${res.statusText}`);
  }

  const data = await res.json();
  if (!data.embedding) {
    throw new Error("No embedding returned from Ollama");
  }
  return data.embedding;
}
