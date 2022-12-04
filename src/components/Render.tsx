import { trpc } from "../utils/trpc";

const Loading = () => <div>Loading...</div>;

const Day = ({ filename, solver }: { filename: string; solver: string }) => {
  const results = trpc.day.execDay.useQuery(
    { filename, solver },
    { cacheTime: 400000 }
  );

  return results.data ? (
    <div>
      <div>{`Result: ${results.data.result}`}</div>
      <div>{`Time ${results.data.time}`}</div>
    </div>
  ) : (
    <Loading />
  );
};

export const Render = ({ day }: { day: string }) => {
  return day ? (
    <div>
      <Day filename={`example-day${day}.txt`} solver={`day${day}`} />
      <Day filename={`day${day}.txt`} solver={`day${day}`} />
    </div>
  ) : null;
};
export default Render;
