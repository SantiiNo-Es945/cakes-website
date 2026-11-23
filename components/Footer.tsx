"use cache"
export default async function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Kusy Kay</p>
      <p>Bogotá</p>
      <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
      <a href="#" target="_blank" rel="noopener noreferrer">WhatsApp</a>
      <p>&copy; {currentYear} Kusy Kay</p>
    </footer>
  );
}
