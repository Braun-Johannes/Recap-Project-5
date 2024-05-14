import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <Link href="../art-pieces">Pieces</Link>
      <br />
      <Link href="/">Spotlight</Link>
      <br />
      <Link href="../favorites">Favorites</Link>
    </>
  );
}
