// build-store.js
import { getStore } from "@netlify/blobs";

async function buildStore() {
  const store = getStore("customers");

  // Example: writing some data to your store
  await store.set("sahara", "all sahara json data");

  console.log("✅ Store built and initialized!");
}

buildStore().catch((err) => {
  console.error("❌ Error building store:", err);
  process.exit(1);
});
