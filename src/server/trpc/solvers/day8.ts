const day8Solver = (input: string) => {
  const lines = input.split("\n");
  const nbs = lines.map((line) => line.split("").map((e) => parseInt(e)));
  const nbsCol = nbs.map((_, idx) => {
    return nbs.map((l) => l[idx]) as number[];
  });
  let visible = (nbs[0]?.length as number) * 2 + nbs.length * 2 - 4;
  nbs.forEach((line, idx) => {
    if (idx === 0 || idx === nbs.length - 1) return;
    line.forEach((tree, treeIdx) => {
      if (treeIdx === 0 || treeIdx === line.length - 1) return;
      const before = line.slice(0, treeIdx);
      const after = line.slice(treeIdx + 1);
      const lineY = nbsCol[treeIdx] as number[];
      const beforeY = lineY.slice(0, idx);
      const afterY = lineY.slice(idx + 1);
      if (
        !before.some((a) => a >= tree) ||
        !after.some((a) => a >= tree) ||
        !beforeY.some((a) => a >= tree) ||
        !afterY.some((a) => a >= tree)
      ) {
        visible++;
      }
    });
  });
  return visible;
};

export default day8Solver;
