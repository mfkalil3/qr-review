// netlify/functions/build-store.js
import { getStore } from "@netlify/blobs";

export async function handler() {
  try {
    const store = getStore("customers");

    await store.set("sahara", "all sahara json data");

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "✅ Store built and initialized!" }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message }),
    };
  }
}
