import type { Results } from "../../../types";
import { loadTextFileSync } from "load-text-file";
import { z } from "zod";
import { router, publicProcedure } from "../trpc";
import day1Solver from "../solvers/day1";
import day1bSolver from "../solvers/day1b";
import day2Solver from "../solvers/day2";
import day2bSolver from "../solvers/day2b";
import day3Solver from "../solvers/day3";
import day3bSolver from "../solvers/day3b";

type Solver<T = number | string> = (input: string) => T;
function runday<T = number | string>(
  fct: Solver<T>,
  filename: string
): Results<T> {
  const input = loadTextFileSync(
    __dirname + "/../../../../../public/puzzles/" + filename
  );
  const start = new Date().getTime();
  const result = (fct ?? (() => -1))(input);
  const end = new Date().getTime();
  return {
    result,
    time: end - start,
  };
}

const solvers: Record<string, (_: string) => number | string> = {
  day1: day1Solver,
  day1b: day1bSolver,
  day2: day2Solver,
  day2b: day2bSolver,
  day3: day3Solver,
  day3b: day3bSolver,
};
export const dayRouter = router({
  execDay: publicProcedure
    .input(z.object({ filename: z.string(), solver: z.string() }))
    .query(({ input }) =>
      runday(solvers[input.solver] as Solver, input.filename)
    ),
});
