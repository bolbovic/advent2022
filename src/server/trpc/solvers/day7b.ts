const day7Solver = (input: string) => {
  const lines = input.split("\n");
  const dirs: string[] = [];
  const sizes: Record<string, number> = {};
  lines.forEach((line) => {
    if (line.substring(0, 7) === "$ cd ..") {
      dirs.pop();
    } else if (line.substring(0, 4) === "$ cd") {
      console.log(line.split(" ")[2]);
      const newDir =
        line.split(" ")[2] === "/"
          ? "/"
          : dirs[dirs.length - 1] + "/" + line.split(" ")[2] || "";
      dirs.push(newDir);
      sizes[newDir] = 0;
    } else if (line !== "$ ls") {
      const entry = line.split(" ");
      if (entry[0] !== "dir") {
        dirs.forEach((dir) => (sizes[dir] += parseInt(entry[0] || "0")));
      }
    }
  });
  const min = 30000000 - (70000000 - (sizes["/"] as number));
  let smallest = 70000000;
  Object.keys(sizes).forEach((dir) => {
    const value = sizes[dir] as number;
    if (value > min && value < smallest) {
      smallest = value;
    }
  });
  return smallest;
};

export default day7Solver;
