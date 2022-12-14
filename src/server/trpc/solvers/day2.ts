const pointsTable: Record<string, number> = {
  "A X": 1 + 3,
  "B X": 1 + 0,
  "C X": 1 + 6,
  "A Y": 2 + 6,
  "B Y": 2 + 3,
  "C Y": 2 + 0,
  "A Z": 3 + 0,
  "B Z": 3 + 6,
  "C Z": 3 + 3,
};

const day2Solver = (input: string) => {
  const lines = input.split("\n");
  let points = 0;
  lines.forEach((match) => {
    points += pointsTable[match] || 0;
  });
  return points;
};

export default day2Solver;
