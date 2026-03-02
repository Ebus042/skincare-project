import { Search, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-10 py-6">
        {/* Logo */}
        <h1 className="text-2xl font-semibold">
          <span className="text-orange-500">Glow</span>Essence
        </h1>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-orange-500 cursor-pointer">
            <a href="#home">Home</a>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            <a href="#products">Products</a>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            <a href="#benefits">Benefits</a>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            <a href="#reviews">Reviews</a>
          </li>
          <li className="hover:text-orange-500 cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu */}

        {/* Icons */}
        <div className="flex items-center gap-5">
          <Search size={20} className="cursor-pointer" />
          <ShoppingBag size={20} className="cursor-pointer" />
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </div>
        </div>
        {isOpen && (
          <ul className="absolute top-full left-0 w-full bg-white shadow-lg flex flex-col items-center gap-6 py-6 md:hidden">
            <li className="hover:text-orange-500 cursor-pointer">
              <a onClick={closeMenu} href="#home">
                Home
              </a>
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              <a onClick={closeMenu} href="#products">
                Products
              </a>
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              <a onClick={closeMenu} href="#about">
                About
              </a>
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              <a onClick={closeMenu} href="#benefits">
                Benefits
              </a>
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              <a onClick={closeMenu} href="#reviews">
                Reviews
              </a>
            </li>
            <li className="hover:text-orange-500 cursor-pointer">
              <a onClick={closeMenu} href="#contact">
                Contact
              </a>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
