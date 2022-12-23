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
import day4Solver from "../solvers/day4";
import day4bSolver from "../solvers/day4b";
import day5Solver from "../solvers/day5";
import day5bSolver from "../solvers/day5b";
import day6Solver from "../solvers/day6";
import day6bSolver from "../solvers/day6b";
import day7Solver from "../solvers/day7";
import day7bSolver from "../solvers/day7b";
import day8Solver from "../solvers/day8";
import day8bSolver from "../solvers/day8b";
import day9Solver from "../solvers/day9";
import day9bSolver from "../solvers/day9b";
import day10Solver from "../solvers/day10";
import day10bSolver from "../solvers/day10b";
import day11Solver from "../solvers/day11";
import day11bSolver from "../solvers/day11b";
import day12Solver from "../solvers/day12";
import day12bSolver from "../solvers/day12b";
import day13Solver from "../solvers/day13";
import day13bSolver from "../solvers/day13b";
import day14Solver from "../solvers/day14";
import day14bSolver from "../solvers/day14b";
import day15Solver from "../solvers/day15";
import day15bSolver from "../solvers/day15b";
import day16Solver from "../solvers/day16";
import day16bSolver from "../solvers/day16b";
import day17Solver from "../solvers/day17";
import day18Solver from "../solvers/day18";
import day18bSolver from "../solvers/day18b";
import day19Solver from "../solvers/day19";
import day19bSolver from "../solvers/day19b";
import day20Solver from "../solvers/day20";
import day20bSolver from "../solvers/day20b";
import day21Solver from "../solvers/day21";
import day21bSolver from "../solvers/day21b";
import day22Solver from "../solvers/day22";
import day22bSolver from "../solvers/day22b";
import day23Solver from "../solvers/day23";
import day23bSolver from "../solvers/day23b";
import day24Solver from "../solvers/day24";
import day24bSolver from "../solvers/day24b";
import day25Solver from "../solvers/day25";
import day25bSolver from "../solvers/day25b";

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
  day4: day4Solver,
  day4b: day4bSolver,
  day5: day5Solver,
  day5b: day5bSolver,
  day6: day6Solver,
  day6b: day6bSolver,
  day7: day7Solver,
  day7b: day7bSolver,
  day8: day8Solver,
  day8b: day8bSolver,
  day9: day9Solver,
  day9b: day9bSolver,
  day10: day10Solver,
  day10b: day10bSolver,
  day11: day11Solver,
  day11b: day11bSolver,
  day12: day12Solver,
  day12b: day12bSolver,
  day13: day13Solver,
  day13b: day13bSolver,
  day14: day14Solver,
  day14b: day14bSolver,
  day15: day15Solver,
  day15b: day15bSolver,
  day16: day16Solver,
  day16b: day16bSolver,
  day17: day17Solver,
  day17b: day17Solver,
  day18: day18Solver,
  day18b: day18bSolver,
  day19: day19Solver,
  day19b: day19bSolver,
  day20: day20Solver,
  day20b: day20bSolver,
  day21: day21Solver,
  day21b: day21bSolver,
  day22: day22Solver,
  day22b: day22bSolver,
  day23: day23Solver,
  day23b: day23bSolver,
  day24: day24Solver,
  day24b: day24bSolver,
  day25: day25Solver,
  day25b: day25bSolver,
};
export const dayRouter = router({
  execDay: publicProcedure
    .input(z.object({ filename: z.string(), solver: z.string() }))
    .query(({ input }) =>
      runday(solvers[input.solver] as Solver, input.filename)
    ),
});
