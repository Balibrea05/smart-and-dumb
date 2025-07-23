import NavBar from '@/shared/ui/components/smart/NavBar.component';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <NavBar />
      <Link href={'/pokemon'}>
        <h1>Go search different Pokemon</h1>
      </Link>
    </>
  );
}
