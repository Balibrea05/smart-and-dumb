import Link from 'next/link';

export default function NavBarLinks() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/pokemon">Pokemon</Link>
      </li>
    </ul>
  );
}
