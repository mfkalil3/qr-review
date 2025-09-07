import { getStore } from "@netlify/blobs";

export async function handler(event) {
  try {
    const body = JSON.parse(event.body || "{}");

    // open (or create) your store
    const store = getStore("customers");

    // use a unique key (e.g. timestamp + random) so entries don't overwrite each other
    const key = `feedback-${Date.now()}`;
    await store.set(key, JSON.stringify(body));

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true, id: key }),
    };
  } catch (err) {
    console.error("❌ Error saving feedback:", err);
    return {
      statusCode: 500,
      body: JSON.stringify({ ok: false, error: err.message }),
    };
  }
}
