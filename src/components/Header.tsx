import Link from "next/link";

export function Header() {
  return (
    <header className="border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
          >
            drop
          </Link>

          <nav>
            <ul className="flex gap-8">
              <li>
                <Link href="/products" className="text-gray-600 hover:text-gray-900 font-medium">
                  Productos
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
