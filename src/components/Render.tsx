import { trpc } from "../utils/trpc";

const Loading = () => <div>Loading...</div>;

type Props = { expected?: string | number; filename: string; solver: string };
const Day = ({ expected, filename, solver }: Props) => {
  const results = trpc.day.execDay.useQuery(
    { filename, solver },
    { cacheTime: 400000 }
  );

  return results.data ? (
    <div className="grid grid-cols-6 gap-1">
      <div className="col-span-4">Result</div>
      <div
        className={`col-span-2 ${
          expected
            ? expected === results.data.result
              ? "text-green-500"
              : "text-red-500"
            : "text-cyan-200"
        }`}
      >
        {results.data.result}
      </div>
      <div className="col-span-4">Time</div>
      <div className="col-span-2">{results.data.time}</div>
    </div>
  ) : (
    <Loading />
  );
};

const expects: Record<string, number | string> = {
  day1: 24000,
  day1b: 45000,
  day2: 15,
  day2b: 12,
  day3: 157,
  day3b: 70,
  day4: 2,
  day4b: 4,
  day5: "CMZ",
  day5b: "MCD",
  day6: 7,
  day6b: 19,
  day7: 95437,
  day7b: 24933642,
  day8: 21,
  day8b: 8,
};

export const Render = ({ day }: { day: string }) => {
  return day ? (
    <div className="grid grid-cols-12 gap-2 border p-5 text-white">
      <div className="col-span-2"></div>
      <div className="col-span-5">Examples</div>
      <div className="col-span-5">Problem</div>
      <div className="col-span-2">Part1</div>
      <div className="col-span-5">
        <Day
          expected={expects[`day${day}`]}
          filename={`example-day${day}.txt`}
          solver={`day${day}`}
        />
      </div>
      <div className="col-span-5">
        <Day filename={`day${day}.txt`} solver={`day${day}`} />
      </div>
      <div className="col-span-2">Part2</div>
      <div className="col-span-5">
        <Day
          expected={expects[`day${day}b`]}
          filename={`example-day${day}.txt`}
          solver={`day${day}b`}
        />
      </div>
      <div className="col-span-5">
        <Day filename={`day${day}.txt`} solver={`day${day}b`} />
      </div>
    </div>
  ) : null;
};
export default Render;
