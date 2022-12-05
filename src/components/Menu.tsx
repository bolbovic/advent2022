import Link from "next/link";

export const Menu = () => (
  <ul>
    {new Array(2).fill(1).map((_, idx) => (
      <Link key={idx} href={`/day/${idx + 1}`}>
        <li>Day {idx + 1}</li>
      </Link>
    ))}
  </ul>
);

export default Menu;
