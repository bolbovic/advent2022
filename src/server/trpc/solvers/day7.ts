const day7Solver = (input: string) => {
  const lines = input.split("\n");
  const dirs: string[] = [];
  const sizes: Record<string, number> = {};
  lines.forEach((line) => {
    if (line.substring(0, 7) === "$ cd ..") {
      dirs.pop();
    } else if (line.substring(0, 4) === "$ cd") {
      const newDir = dirs[dirs.length - 1] + "/" + line.split(" ")[2] || "";
      dirs.push(newDir);
      sizes[newDir] = 0;
    } else if (line !== "$ ls") {
      const entry = line.split(" ");
      if (entry[0] !== "dir") {
        dirs.forEach((dir) => (sizes[dir] += parseInt(entry[0] || "0")));
      }
    }
  });
  console.log(sizes);
  return Object.keys(sizes).reduce(
    (total, dir) =>
      (sizes[dir] as number) < 100000 ? total + (sizes[dir] as number) : total,
    0
  );
};

export default day7Solver;
