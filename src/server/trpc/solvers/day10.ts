const day10Solver = (input: string) => {
  const lines = input.split("\n");
  const cycles: number[] = [];
  lines.forEach((line) => {
    cycles.push(0);
    if (line !== "noop") {
      cycles.push(parseInt(line.split(" ")[1] as string));
    }
  });
  let X = 1;
  let result = 0;
  cycles.forEach((cycle, idx) => {
    if ([20, 60, 100, 140, 180, 220].includes(idx + 1)) {
      result += X * (idx + 1);
    }
    X += cycle;
  });
  return result;
};

export default day10Solver;
