import React from "react";

function Navbar() {
  return (
    <nav className="bg-accent shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <span className="text-2xl font-bold text-primary font-futuristic tracking-widest">Portfolyo Demo</span>
        <ul className="flex space-x-6">
          <li>
            <a href="#anasayfa" className="text-grayish hover:text-primary font-medium transition">Anasayfa</a>
          </li>
          <li>
            <a href="#meslekler" className="text-grayish hover:text-primary font-medium transition">Meslekler</a>
          </li>
          <li>
            <a href="#iletisim" className="text-grayish hover:text-primary font-medium transition">İletişim</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;