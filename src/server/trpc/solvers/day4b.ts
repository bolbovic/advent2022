const day4bSolver = (input: string) => {
  const lines = input.split("\n");
  let bads = 0;
  lines.forEach((l) => {
    const segs = l.split(",");
    const [min1, max1] = segs[0]?.split("-").map((e) => parseInt(e)) as [
      number,
      number
    ];
    const [min2, max2] = segs[1]?.split("-").map((e) => parseInt(e)) as [
      number,
      number
    ];
    if (!((max1 < min2 && min1 < min2) || (max2 < min1 && min2 < min1))) {
      bads++;
    }
  });
  return bads;
};

export default day4bSolver;
