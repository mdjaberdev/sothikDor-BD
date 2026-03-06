export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">
      <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-2 ">Sotik Dor</h3>
          <p className="w-[300px]">
            আপনার দৈনন্দিন প্রোডাক্টের সঠিক দাম খুঁজুন সহজে।
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li>Home</li>
            <li>Products</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-2">Contact</h3>
          <p>📞 +880 1811956107</p>
          <p>📧 info@sotikdor.com</p>
        </div>
      </div>

      <div className="bg-gray-800 text-center text-gray-400 py-4">
        © 2026 Sotik Dor. All rights reserved.
      </div>
    </footer>
  );
}
