export default function Header() {
  return (
    <header className="bg-gray-400 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo / Website Name */}
        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wide">
          Sotik Dor
        </h1>

        {/* Navigation */}
        <nav className="mt-3 md:mt-0 flex space-x-6">
          <a
            href="#"
            className="text-white text-lg font-medium hover:text-gray-900 transition"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white text-lg font-medium hover:text-gray-900 transition"
          >
            Products
          </a>
          <a
            href="#"
            className="text-white text-lg font-medium hover:text-gray-900 transition"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
