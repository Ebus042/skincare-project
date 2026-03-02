import { Search, ShoppingBag, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <nav className="flex items-center justify-between px-10 py-6">
        {/* Logo */}
        <h1 className="text-2xl font-semibold">
          <span className="text-orange-500">Glow</span>Essence
        </h1>

        {/* Links */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li className="hover:text-orange-500 cursor-pointer">Home</li>
          <li className="hover:text-orange-500 cursor-pointer">Products</li>
          <li className="hover:text-orange-500 cursor-pointer">About</li>
          <li className="hover:text-orange-500 cursor-pointer">Benefits</li>
          <li className="hover:text-orange-500 cursor-pointer">Reviews</li>
          <li className="hover:text-orange-500 cursor-pointer">Contact</li>
        </ul>

        {/* Icons */}
        <div className="flex items-center gap-5">
          <Search size={20} className="cursor-pointer" />
          <ShoppingBag size={20} className="cursor-pointer" />
          <Menu size={22} className="md:hidden cursor-pointer" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
