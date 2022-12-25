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
  let render = "";
  cycles.forEach((cycle, idx) => {
    if ([40, 80, 120, 160, 200].includes(idx)) {
      render += "\n";
    }
    if (Math.abs(X - (idx % 40)) > 1) {
      render += ".";
    } else {
      render += "#";
    }
    X += cycle;
  });
  console.log(render);
  return render;
};

export default day10Solver;
