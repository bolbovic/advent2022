const day1Solver = (input: string) => {
  const lines = input.split("\n");
  const elfs: number[] = [];
  let i = 0;
  let max = 0;
  lines.forEach((cal) => {
    if (!elfs[i]) {
      elfs.push(0);
    }
    if (cal) {
      elfs[i] += parseInt(cal);
    } else {
      const cur = elfs[i] || 0;
      max = max > cur ? max : cur;
      i++;
    }
  });
  return max;
};

export default day1Solver;
