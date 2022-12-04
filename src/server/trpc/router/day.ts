import type { Results } from "../../../types";
import { loadTextFileSync } from "load-text-file";
import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import day1Solver from "../solvers/day1";

type Solver<T = number | string> = (input: string) => T;
function runday<T = number | string>(
  fct: Solver<T>,
  filename: string
): Results<T> {
  const input = loadTextFileSync(
    __dirname + "/../../../../../public/puzzles/" + filename
  );
  const start = new Date().getMilliseconds();
  const result = fct(input);
  return {
    result,
    time: new Date().getMilliseconds() - start,
  };
}

const solvers: Record<string, (_: string) => number | string> = {
  day1: day1Solver,
};
export const dayRouter = router({
  execDay: publicProcedure
    .input(z.object({ filename: z.string(), solver: z.string() }))
    .query(({ input }) =>
      runday(solvers[input.solver] as Solver, input.filename)
    ),
  day1: publicProcedure.query(() => runday(day1Solver, "puzzles/day1.txt")),
  day1Example: publicProcedure.query(() =>
    runday(day1Solver, "puzzles/example-day1.txt")
  ),
});
