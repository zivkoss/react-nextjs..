import Link from 'next/link';

import Header from '@/components/header';

export default function Home() {
  // console.log('Executing...')
  return (
    <main>
      <Header/>
      {/* <img src="/logo.png" alt="A server surrounded by magic sparkles." /> */}
      <p>🔥 Let&apos;s get started! 🔥</p>
      <p><Link href="/about">About Us</Link></p>
    </main>
  );
}
