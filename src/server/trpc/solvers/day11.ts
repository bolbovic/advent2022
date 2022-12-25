type Monkey = {
  items: number[];
  operation: string;
  div: number;
  trueMonkey: number;
  falseMonkey: number;
  inspect: number;
};

const getNextMonkey = (lines: string[]): Monkey => {
  lines.shift();
  const items = ((lines.shift() as string).split(": ")[1] as string)
    .split(", ")
    .map((i) => parseInt(i));
  const operation = (lines.shift() as string).split("= ")[1];
  const div = parseInt((lines.shift() as string).split("by ")[1] || "");
  const trueMonkey = parseInt(
    (lines.shift() as string).split("monkey ")[1] || ""
  );
  const falseMonkey = parseInt(
    (lines.shift() as string).split("monkey ")[1] || ""
  );
  lines.shift();
  return {
    items,
    operation,
    div,
    trueMonkey,
    falseMonkey,
    inspect: 0,
  } as Monkey;
};

const day11Solver = (input: string) => {
  const lines = input.split("\n");
  const monkeys: Monkey[] = [];
  while (lines.length) {
    monkeys.push(getNextMonkey(lines));
  }

  for (let i = 0; i < 20; i++) {
    monkeys.forEach((m) => {
      while (m.items.length) {
        m.inspect++;
        const item = m.items.shift() as number;
        const val: number = Math.floor(
          eval(m.operation?.replaceAll("old", `${item}`)) / 3
        );
        monkeys[val % m.div === 0 ? m.trueMonkey : m.falseMonkey]?.items.push(
          val
        );
      }
    });
    //   if (monkeys.length < 5) {
    //     console.log("round ", i + 1);
    //     monkeys.forEach((m) => {
    //       console.log(m.items);
    //     });
    //   }
  }
  const inspections = monkeys.map((m) => m.inspect);
  //if (monkeys.length < 5) {
  //  console.log(inspections);
  //}
  inspections.sort((a, b) => b - a);
  return (inspections[0] as number) * (inspections[1] as number);
};

export default day11Solver;
