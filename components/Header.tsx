import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <p>Kusy Kay</p>
      <nav>
        <Link href="/">Inicio</Link>
        <Link href="/menu">Menú</Link>
        <Link href="/pedidos">Pedidos</Link>
      </nav>
    </header>
  );
}
