import Link from 'next/link';

export default function Header() {
  return (
    <header className="p-4 bg-blush flex flex-col md:flex-row justify-between items-center gap-2">
      <p className="font-script text-berry text-3xl">Kusy Kay</p>
      <nav className="flex gap-4">
        <Link href="/">Inicio</Link>
        <Link href="/menu">Menú</Link>
        <Link href="/pedidos">Pedidos</Link>
      </nav>
    </header>
  );
}
