const pointsTable: Record<string, number> = {
  "A X": 3 + 0,
  "B X": 1 + 0,
  "C X": 2 + 0,
  "A Y": 1 + 3,
  "B Y": 2 + 3,
  "C Y": 3 + 3,
  "A Z": 2 + 6,
  "B Z": 3 + 6,
  "C Z": 1 + 6,
};

const day2bSolver = (input: string) => {
  const lines = input.split("\n");
  let points = 0;
  lines.forEach((match) => {
    points += pointsTable[match] || 0;
  });
  return points;
};

export default day2bSolver;
