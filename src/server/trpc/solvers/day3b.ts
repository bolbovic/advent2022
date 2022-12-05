const getPointFromChar = (c: string) =>
  c.charCodeAt(0) - "a".charCodeAt(0) > 0
    ? c.charCodeAt(0) - "a".charCodeAt(0) + 1
    : c.charCodeAt(0) - "A".charCodeAt(0) + 27;

const day3bSolver = (input: string) => {
  const lines = input.split("\n");
  let points = 0;
  for (let i = 0; i < lines.length; i += 3) {
    const chars =
      lines[i]?.split("").filter((v, idx, self) => self.indexOf(v) === idx) ||
      "";
    for (let j = 0; j < chars?.length; j++) {
      const c = chars[j] || "";
      if (lines[i + 1]?.includes(c) && lines[i + 2]?.includes(c)) {
        points += getPointFromChar(c);
      }
    }
  }
  return points;
};

export default day3bSolver;
