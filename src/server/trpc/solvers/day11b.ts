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

  for (let i = 0; i < 21; i++) {
    if (monkeys.length < 5 && [1, 20, 1000].includes(i)) {
      const ins = monkeys.map((m) => m.inspect);
      console.log(
        ins,
        ins.reduce((t, i) => t + i, 0)
      );
    }
    monkeys.forEach((m, idx) => {
      while (m.items.length) {
        m.inspect++;
        const item = m.items.shift() as number;
        let val: number = eval(m.operation?.replaceAll("old", `${item}`));
        [
          29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
        ].forEach((n) => {
          while (val % n === 0) {
            val = val / n;
          }
        });
        if (val % m.div === 0) {
          monkeys[m.trueMonkey]?.items.push(val);
        } else {
          monkeys[m.falseMonkey]?.items.push(val);
        }
      }
    });
  }
  const inspections = monkeys.map((m) => m.inspect);
  if (monkeys.length < 5) {
    console.log(monkeys);
  }
  inspections.sort((a, b) => b - a);
  return (inspections[0] as number) * (inspections[1] as number);
};

export default day11Solver;
