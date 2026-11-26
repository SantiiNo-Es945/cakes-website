'use cache';
export default async function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-brown text-cream">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 md:flex-row">
        <div className="text-center md:text-left space-y-2">
          <p className="font-semibold tracking-wide">Kusy Kay</p>
          <p className="text-sm text-cream/80">Bogotá</p>
        </div>

        <div className="flex items-center gap-6">
          <a
            className="underline-offset-4 hover:underline"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            className="underline-offset-4 hover:underline"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>

        <p className="text-sm text-cream/80">&copy; {currentYear} Kusy Kay</p>
      </div>
    </footer>
  );
}
