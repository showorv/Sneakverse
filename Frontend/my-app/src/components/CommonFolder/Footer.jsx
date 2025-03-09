import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Logo and About Section */}
        <div>
          <h2 className="text-xl font-bold">ShoeStore</h2>
          <p className="mt-2 text-gray-400">Your one-stop destination for stylish and comfortable footwear.</p>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="/shop" className="text-gray-400 hover:text-white">Shop</a></li>
            <li><a href="/about" className="text-gray-400 hover:text-white">About Us</a></li>
            <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
            <li><a href="/faq" className="text-gray-400 hover:text-white">FAQ</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div>
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="flex mt-2 space-x-4">
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
            <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="text-center mt-6 border-t border-gray-700 pt-4">
        <p className="text-gray-400">&copy; {new Date().getFullYear()} ShoeStore. All rights reserved.</p>
      </div>
    </footer>
  )
}
