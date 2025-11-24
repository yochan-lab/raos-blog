import Link from "next/link";

export function Header() {
  return (
    <header className="flex justify-between items-baseline mb-16 md:mb-24 border-b border-gray-100 pb-4">
      <Link href="/" className="text-2xl font-serif font-medium hover:text-gray-600 transition-colors">
        Rao's Sunday Harangues
      </Link>
      <nav className="flex gap-6 text-sm text-gray-500 font-sans">
        <Link href="/" className="hover:text-gray-900 transition-colors">
          Home
        </Link>
      </nav>
    </header>
  );
}

