const day6Solver = (input: string) => {
  const chars = input.split("");
  const current = chars.splice(0, 3);
  let i = 4;
  while (chars.length > 0) {
    current.push(chars.shift() as string);
    if (
      current.length ===
      current.filter((value, index, self) => self.indexOf(value) === index)
        .length
    ) {
      break;
    }
    i++;
    current.shift();
  }
  return i;
};

export default day6Solver;
