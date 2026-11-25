import Link from 'next/link';

export default function Home() {
  return (
    <section className="flex flex-col items-center text-center gap-4 px-6 py-20 md:py-28">
      <h1 className="font-serif text-3xl md:text-5xl max-w-md">
        Tortas y postres artesanales en Bogotá
      </h1>

      <p className="font-nonito text-base md:text-lg max-w-md">
        Hacemos pedidos personalizados para ocasiones especiales
      </p>

      <Link
        href="/menu"
        className="mt-4 px-6 py-2.5 bg-berry text-cream rounded-lg hover:brightness-90 transition"
      >
        Ver menú
      </Link>
    </section>
  );
}
