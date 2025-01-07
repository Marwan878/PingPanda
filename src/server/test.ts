import { handle } from "hono/vercel";import app from ".";export const httpHandler = handle(app);
