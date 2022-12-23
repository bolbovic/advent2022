const day5Solver = (input: string) => {
  const lines = input.split("\n");
  const crates = new Array<string[]>([], [], [], [], [], [], [], [], []);
  let line = "";
  console.log("yo");
  while (true) {
    line = lines.shift() || "";
    if (line?.substring(1, 2) === "1") {
      break;
    }
    const parse = line.match(/.{1,4}/g);
    parse?.forEach((str, idx) => {
      const letter = str.substring(1, 2);
      if (letter !== " ") {
        crates[idx]?.push(letter);
      }
    });
  }
  lines.shift();
  lines.forEach((action) => {
    const [, number, , pile1, , pile2] = action
      .split(" ")
      .map((nb) => parseInt(nb)) as [
      number,
      number,
      number,
      number,
      number,
      number
    ];
    const items: string[] = [];
    for (let i = 0; i < number; i++) {
      items.unshift((crates[(pile1 || 1) - 1] || []).shift() as string);
    }
    (crates[(pile2 || 1) - 1] || []).splice(0, 0, ...items);
  });
  console.log("crates", crates);
  return crates.reduce((str, crate) => `${str}${crate[0] || ""}`, "");
};

export default day5Solver;
