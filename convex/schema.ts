// NOTE: You can remove this file. Declaring the shape
// of the database is entirely optional in Convex.
// See https://docs.convex.dev/database/schemas.

import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema(
  {
    users: defineTable({
      username: v.string(),
      email: v.string(),
      messages: v.array(v.id("messages")),
    }),
    messages: defineTable({
      message: v.string(),
      receiver: v.id("users"),
      sender: v.id("users")
    }).index("by_sender_id", ["sender"])
  },
  { schemaValidation: true }
);
