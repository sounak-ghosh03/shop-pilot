// Filename: components/Footer.jsx
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

/**
 * Footer Component
 *
 * Redesigned with:
 * - consistent spacing and grid layout
 * - clear visual hierarchy
 * - accessible navigation and labels
 * - responsive design (stacked on mobile, grid on desktop)
 * - social media icons with hover states
 *
 * Preserves functionality: links and assets remain intact.
 */
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 sm:py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Brand Section */}
                    <div>
                        <Link to="/" className="flex items-center space-x-2">
                            <img
                                src={assets.logo}
                                alt="Shop Pilot Logo"
                                className="w-10 h-10"
                            />
                            <span className="text-xl font-bold text-white">
                                Shop Pilot
                            </span>
                        </Link>
                        <p className="mt-4 text-sm text-gray-400 max-w-xs">
                            Your trusted destination for fresh groceries and
                            quality products, delivered to your doorstep with
                            care.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">
                            Quick Links
                        </h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link
                                    to="/products"
                                    className="hover:text-white transition-colors"
                                >
                                    All Products
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/cart"
                                    className="hover:text-white transition-colors"
                                >
                                    Cart
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/my-orders"
                                    className="hover:text-white transition-colors"
                                >
                                    My Orders
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/address"
                                    className="hover:text-white transition-colors"
                                >
                                    Manage Address
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">
                            Support
                        </h3>
                        <ul className="mt-4 space-y-2">
                            <li>
                                <Link
                                    to="/about"
                                    className="hover:text-white transition-colors"
                                >
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="hover:text-white transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/faq"
                                    className="hover:text-white transition-colors"
                                >
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/privacy-policy"
                                    className="hover:text-white transition-colors"
                                >
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">
                            Connect With Us
                        </h3>
                        <div className="mt-4 flex space-x-4">
                            <a
                                href="#"
                                aria-label="Facebook"
                                className="hover:text-white transition-colors"
                            >
                                <i className="fab fa-facebook-f text-lg"></i>
                            </a>
                            <a
                                href="#"
                                aria-label="Instagram"
                                className="hover:text-white transition-colors"
                            >
                                <i className="fab fa-instagram text-lg"></i>
                            </a>
                            <a
                                href="#"
                                aria-label="Twitter"
                                className="hover:text-white transition-colors"
                            >
                                <i className="fab fa-twitter text-lg"></i>
                            </a>
                            <a
                                href="#"
                                aria-label="LinkedIn"
                                className="hover:text-white transition-colors"
                            >
                                <i className="fab fa-linkedin-in text-lg"></i>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Footer */}
                <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} Shop Pilot. All rights
                    reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
