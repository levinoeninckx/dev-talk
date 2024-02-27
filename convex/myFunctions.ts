import { v } from "convex/values";
import { query, mutation, action } from "./_generated/server";
import { api } from "./_generated/api";

// Write your Convex functions in any file inside this directory (`convex`).
// See https://docs.convex.dev/functions for more.

export const createUser = mutation({
  args: { username: v.string(), email: v.string() },
  handler: async (ctx, args) => {
    const newUserId = await ctx.db.insert("users", { username: args.username, email: args.email, messages: [] });
    return newUserId;
  }
});

export const sendMessage = mutation({
  args: { sender: v.id("users"), receiver: v.id("users"), message: v.string()},
  handler: async (ctx, args) => {
    const newMessageId = await ctx.db.insert("messages", { receiver: args.receiver, sender: args.sender, message: args.message })
    return newMessageId;
  }
});

export const getUsers = query({
  args: {},
  handler: async (ctx, args) => {
    return await ctx.db.query("users").collect()
  }
});

export const getMessages = query({
  args: {},
  handler: async (ctx, args) => {
    return await ctx.db.query("messages").collect()
  }
});

export const getMessagesForUser = query({
  args: {userId: v.id("users")},
  handler: async (ctx, args) => {
    return await ctx.db
      .query("messages")
      .withIndex("by_sender_id", q => q.eq("sender", args.userId))
      .collect();
  }
})