import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "vyi2ka9l",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
