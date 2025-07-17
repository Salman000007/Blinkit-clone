import { Link } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../../context/CartContext";

const Navbar = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <nav className="flex items-center justify-between px-6 py-3 bg-green-600 text-white shadow-md">
      <div className="flex items-center gap-6">
        <Link to="/" className="text-2xl font-bold tracking-wide">
          Blinkit
        </Link>
        <div className="flex items-center gap-1 cursor-pointer text-sm">
          <span className="font-medium">Delivery in</span>
          <span className="font-semibold underline">Bangalore</span>
          <span className="text-xs ml-1">▼</span>
        </div>
      </div>

      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search for products"
          className="w-full px-4 py-2 rounded-md text-black text-sm focus:outline-none"
        />
      </div>

      <div className="flex items-center gap-6 text-sm">
        <Link to="/login" className="hover:underline">
          Login
        </Link>
        <Link
          to="/cart"
          className="relative bg-green-700 px-3 py-1 rounded-md hover:bg-green-800"
        >
          Cart
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-yellow-400 text-green-900 text-xs font-bold px-1.5 py-0.5 rounded-full">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
