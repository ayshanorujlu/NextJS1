import Navbar from '../components/Navbar';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link href="/main">Main</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contacts">Contacts</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/account">Account</Link></li>
      </ul>
    </nav>
  );
}
