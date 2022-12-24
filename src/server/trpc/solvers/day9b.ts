type POS = [number, number];
type Knots = [POS, POS, POS, POS, POS, POS, POS, POS, POS, POS];
const isTouching = (pos1: POS, pos2: POS) => {
  return Math.abs(pos1[0] - pos2[0]) <= 1 && Math.abs(pos1[1] - pos2[1]) <= 1;
};

const getStep = (d: number, t: number) => {
  return d - t ? (d - t) / Math.abs(d - t) : 0;
};

const day9Solver = (input: string) => {
  const lines = input.split("\n");
  const knots: Knots = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
  ] as Knots;
  const places: Record<string, true> = { "0-0": true };

  const moveH = (idx: number, dir: POS, c?: boolean) => {
    const current = knots[idx] as POS;
    current[0] += dir[0];
    current[1] += dir[1];
    const next = knots[idx + 1] as POS;
    if (!next) {
      places[current.join("-")] = true;
    } else {
      if (!isTouching(current, next)) {
        const steps: POS = [
          getStep(current[0], next[0]),
          getStep(current[1], next[1]),
        ];
        if (c) console.log(idx, current, next, steps);
        moveH(idx + 1, steps);
      }
    }
  };
  lines.forEach((line, idx) => {
    const [dir, numberString] = line.split(" ");
    const num = parseInt(numberString || "");
    if (idx < 10) console.log(knots);
    for (let i = 0; i < num; i++) {
      switch (dir) {
        case "R":
          moveH(0, [1, 0], idx < 10);
          break;
        case "L":
          moveH(0, [-1, 0], idx < 10);
          break;
        case "U":
          moveH(0, [0, 1], idx < 10);
          break;
        case "D":
          moveH(0, [0, -1], idx < 10);
          break;
      }
    }
  });

  return Object.keys(places).length;
};

export default day9Solver;
