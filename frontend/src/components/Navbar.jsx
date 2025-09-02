// Filename: Navbar.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { assets } from "../assets/assets";
import toast from "react-hot-toast";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const {
    user,
    setUser,
    showUserLogin,
    setShowUserLogin,
    navigate,
    searchQuery,
    setSearchQuery,
    cartCount,
    axios,
  } = useAppContext();

  const logout = async () => {
    try {
      const { data } = await axios.get("/api/user/logout");
      if (data.success) {
        setUser(null);
        navigate("/");
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate("/products");
    }
  }, []);

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 bg-white/80 backdrop-blur-md shadow-sm border-b border-indigo-100 sticky top-0 z-50">
      {/* Logo */}
      <Link to="/">
        <h2 className="text-2xl font-bold text-indigo-600">Shop Pilot</h2>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <Link
          to={"/"}
          className="text-gray-700 hover:text-indigo-600 transition-colors"
        >
          Home
        </Link>
        <Link
          to={"/products"}
          className="text-gray-700 hover:text-indigo-600 transition-colors"
        >
          All Products
        </Link>

        {/* Search Bar */}
        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 py-1.5 rounded-full bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-200 transition">
          <input
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.836 10.615 15 14.695"
              stroke="#6B7280"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              clipRule="evenodd"
              d="M9.141 11.738c2.729-1.136 4.001-4.224 2.841-6.898S7.67.921 4.942 2.057C2.211 3.193.94 6.281 2.1 8.955s4.312 3.92 7.041 2.783"
              stroke="#6B7280"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Cart */}
        <div
          onClick={() => navigate("/cart")}
          className="relative cursor-pointer"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-indigo-600"
          >
            <path
              d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] flex items-center justify-center rounded-full">
            {cartCount()}
          </span>
        </div>

        {/* User Menu */}
        {user ? (
          <div className="relative group">
            <img
              src={assets.profile_icon}
              alt="Profile"
              className="w-10 rounded-full border border-gray-200"
            />
            <ul className="hidden group-hover:block absolute top-12 right-0 bg-white shadow-lg border border-gray-200 py-2 w-40 rounded-md z-40 text-sm">
              <li
                onClick={() => navigate("/my-orders")}
                className="px-3 py-2 hover:bg-indigo-50 cursor-pointer"
              >
                My Orders
              </li>
              <li
                className="px-3 py-2 hover:bg-indigo-50 cursor-pointer"
                onClick={logout}
              >
                Logout
              </li>
            </ul>
          </div>
        ) : (
          <button
            onClick={() => {
              setOpen(false);
              setShowUserLogin(true);
            }}
            className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full transition"
          >
            Login
          </button>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="flex items-center gap-6 md:hidden">
        {/* Cart (Mobile) */}
        <div
          className="relative cursor-pointer"
          onClick={() => navigate("/cart")}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-indigo-600"
          >
            <path
              d="M.583.583h2.333l1.564 7.81a1.17 1.17 0 0 0 1.166.94h5.67a1.17 1.17 0 0 0 1.167-.94l.933-4.893H3.5m2.333 8.75a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0m6.417 0a.583.583 0 1 1-1.167 0 .583.583 0 0 1 1.167 0"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="absolute -top-2 -right-3 text-xs text-white bg-indigo-500 w-[18px] h-[18px] flex items-center justify-center rounded-full">
            {cartCount()}
          </span>
        </div>

        {/* Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menu"
          className="sm:hidden"
        >
          <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="21" height="1.5" rx=".75" fill="#374151" />
            <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#374151" />
            <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#374151" />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[64px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-3 px-5 text-sm md:hidden border-t border-indigo-100`}
      >
        <Link
          onClick={() => setOpen(false)}
          to={"/"}
          className="w-full px-2 py-2 hover:bg-indigo-50 rounded-md"
        >
          Home
        </Link>
        <Link
          onClick={() => setOpen(false)}
          to={"/products"}
          className="w-full px-2 py-2 hover:bg-indigo-50 rounded-md"
        >
          Products
        </Link>

        {user ? (
          <div className="flex flex-col w-full">
            <button
              onClick={() => {
                setOpen(false);
                navigate("/my-orders");
              }}
              className="text-left px-2 py-2 hover:bg-indigo-50 rounded-md"
            >
              My Orders
            </button>
            <button
              onClick={() => {
                logout();
                setOpen(false);
              }}
              className="text-left px-2 py-2 hover:bg-indigo-50 rounded-md"
            >
              Logout
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              setOpen(false);
              setShowUserLogin(true);
            }}
            className="w-full mt-2 px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full transition"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
