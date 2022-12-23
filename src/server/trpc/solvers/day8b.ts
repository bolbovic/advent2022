const day8Solver = (input: string) => {
  const lines = input.split("\n");
  const nbs = lines.map((line) => line.split("").map((e) => parseInt(e)));
  const nbsCol = nbs.map((_, idx) => {
    return nbs.map((l) => l[idx]) as number[];
  });
  let bestScore = 0;
  nbs.forEach((line, idx) => {
    if (idx === 0 || idx === nbs.length - 1) return;
    line.forEach((tree, treeIdx) => {
      if (treeIdx === 0 || treeIdx === line.length - 1) return;
      const before = line.slice(0, treeIdx);
      before.reverse();
      const after = line.slice(treeIdx + 1);
      const lineY = nbsCol[treeIdx] as number[];
      const beforeY = lineY.slice(0, idx);
      beforeY.reverse();
      const afterY = lineY.slice(idx + 1);
      let score = 1;
      [before, after, beforeY, afterY].forEach((direction) => {
        let dirScore = 0;
        for (let i = 0; i < direction.length; i++) {
          dirScore++;
          if ((direction[i] as number) >= tree) {
            break;
          }
        }
        score *= dirScore;
      });
      if (score > bestScore) bestScore = score;
    });
  });
  return bestScore;
};

export default day8Solver;
