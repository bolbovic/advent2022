const day1bSolver = (input: string) => {
  const lines = input.split("\n");
  lines.push("");
  const maxs: Array<number> = [0, 0, 0];
  let cur = 0;
  lines.forEach((cal) => {
    if (cal) {
      cur += parseInt(cal);
    } else {
      for (let i = 0; i <= 2; i++) {
        const n = maxs[i] as number;
        if (n < cur) {
          maxs.splice(i, 0, cur);
          maxs.splice(3, 1);
          break;
        }
      }
      console.log(maxs, cur);
      cur = 0;
    }
  });
  return maxs.reduce((t, n) => t + n, 0);
};

export default day1bSolver;
