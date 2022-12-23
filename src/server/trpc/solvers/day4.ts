const day4Solver = (input: string) => {
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
    if ((min1 >= min2 && max1 <= max2) || (min2 >= min1 && max2 <= max1)) {
      bads++;
    }
  });
  return bads;
};

export default day4Solver;
