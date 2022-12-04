import Link from "next/link";

export const daysComponents: JSX.Element[] = [<div key={0}>something</div>];

export const Menu = () => (
  <ul>
    {daysComponents.map((_, idx) => (
      <Link key={idx} href={`/day/${idx + 1}`}>
        <li>Day {idx + 1}</li>
      </Link>
    ))}
  </ul>
);

export default Menu;
