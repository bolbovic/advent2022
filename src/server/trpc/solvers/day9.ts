type POS = [number, number];
const isTouching = (pos1: POS, pos2: POS) => {
  return Math.abs(pos1[0] - pos2[0]) <= 1 && Math.abs(pos1[1] - pos2[1]) <= 1;
};

const getStep = (d: number, t: number) => {
  return t - d ? t - (t - d) / Math.abs(t - d) : t;
};

const day9Solver = (input: string) => {
  const lines = input.split("\n");
  const hPos: POS = [0, 0];
  const tPos: POS = [0, 0];
  const places: Record<string, true> = { "0-0": true };

  const moveH = (dir: POS) => {
    hPos[0] = hPos[0] + dir[0];
    hPos[1] = hPos[1] + dir[1];
    if (!isTouching(hPos, tPos)) {
      tPos[0] = getStep(hPos[0], tPos[0]);
      tPos[1] = getStep(hPos[1], tPos[1]);
      places[tPos.join("-")] = true;
    }
  };
  lines.forEach((line) => {
    const [dir, numberString] = line.split(" ");
    const num = parseInt(numberString || "");
    for (let i = 0; i < num; i++) {
      switch (dir) {
        case "R":
          moveH([1, 0]);
          break;
        case "L":
          moveH([-1, 0]);
          break;
        case "U":
          moveH([0, 1]);
          break;
        case "D":
          moveH([0, -1]);
          break;
      }
    }
  });

  return Object.keys(places).length;
};

export default day9Solver;
