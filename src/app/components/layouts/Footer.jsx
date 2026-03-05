export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h2 className="text-xl font-bold text-white mb-2 ">Sotik Dor</h2>
          <p className="w-[300px]">
            আপনার দৈনন্দিন প্রোডাক্টের সঠিক দাম খুঁজুন সহজে।
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-2">Quick Links</h2>
          <ul className="space-y-1">
            <li>
              <a href="#" className="hover:text-white transition">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Products
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold text-white mb-2">Contact</h2>
          <p>📞 +880 123 456 789</p>
          <p>📧 info@sotikdor.com</p>
        </div>
      </div>

      <div className="bg-gray-800 text-center text-gray-400 py-4">
        © 2026 Sotik Dor. All rights reserved.
      </div>
    </footer>
  );
}
