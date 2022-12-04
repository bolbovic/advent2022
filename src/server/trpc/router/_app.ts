import { router } from "../trpc";
import { dayRouter } from "./day";
import { exampleRouter } from "./example";

export const appRouter = router({
  example: exampleRouter,
  day: dayRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
