import path from "path";
import { config } from "dotenv";
import { defineConfig } from "@prisma/config";

// Verifies that the compiler paths backward out of /apps/api/ into the root folder
config({ path: path.resolve(__dirname, "../../.env") });

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: process.env.DATABASE_URL || "",
  },
});
