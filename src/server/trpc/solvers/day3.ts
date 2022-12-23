const day3Solver = (input: string) => {
  const lines = input.split("\n");
  let points = 0;
  lines.forEach((line) => {
    const ruckstack1 = line.substring(0, line.length / 2);
    const ruckstack2 = line.substring(line.length / 2);
    for (let i = 0; i < ruckstack1.length; i++) {
      const c = ruckstack1[i] as string;
      if (ruckstack2.includes(c)) {
        if (c.charCodeAt(0) - "a".charCodeAt(0) > 0) {
          points += c.charCodeAt(0) - "a".charCodeAt(0) + 1;
        } else {
          points += c.charCodeAt(0) - "A".charCodeAt(0) + 27;
        }
        break;
      }
    }
  });
  return points;
};

export default day3Solver;
