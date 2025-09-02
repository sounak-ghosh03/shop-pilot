// Filename: components/Banner.jsx
import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

/**
 * Banner
 *
 * Redesigned with:
 * - unified color system (primary: indigo-600)
 * - improved accessibility (alt text, aria-labels, focus states)
 * - responsive layout and preserved functionality (links to /products)
 *
 * Note: keeps usage of `assets.*` as in the original project.
 */
const Banner = () => {
    return (
        <section
            aria-label="Promotional banner"
            className="relative overflow-hidden bg-gradient-to-r from-indigo-900 to-indigo-500 text-white border-radius-20"
        >
            {/* Background images (large and small) */}
            <img
                src={assets.main_banner_bg}
                alt="Fresh produce and grocery banner background"
                className="hidden md:block w-full h-auto object-cover opacity-80 "
                aria-hidden="true"
            />
            <img
                src={assets.main_banner_bg_sm}
                alt="Grocery banner background (mobile)"
                className="md:hidden w-full h-[320px] object-cover opacity-80"
                aria-hidden="true"
            />

            {/* Overlay content container */}
            <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-0 flex w-full">
                    <div className="max-w-2xl bg-transparent md:bg-transparent backdrop-blur-sm/0">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight drop-shadow-sm">
                            Freshness You Can Trust,
                            <span className="block text-white mt-1 text-lg md:text-xl font-medium">
                                Savings You Will Love!
                            </span>
                        </h1>

                        <p className="mt-4 text-sm md:text-base text-white max-w-prose">
                            Handpicked items delivered fast — discover seasonal
                            deals and everyday essentials at great prices.
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                            <Link
                                to="/products"
                                aria-label="Shop now - view all products"
                                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-indigo-600 font-semibold shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 transition"
                            >
                                Shop Now
                                <img
                                    src={assets.white_arrow_icon}
                                    alt=""
                                    className="w-4 h-4 md:hidden"
                                    aria-hidden="true"
                                />
                            </Link>

                            <Link
                                to="/products"
                                aria-label="Explore deals - view discounted products"
                                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-indigo-500 text-white border border-white/20 font-medium hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 transition"
                            >
                                Explore Deals
                                <svg
                                    className="w-4 h-4 hidden md:inline-block"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    aria-hidden="true"
                                >
                                    <path
                                        d="M5 12h14M13 5l7 7-7 7"
                                        stroke="currentColor"
                                        strokeWidth="1.6"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Decorative/Supporting image on large screens (keeps original visual intent) */}
                    <div className="hidden md:flex flex-1 justify-end items-end">
                        {/* Intentionally empty — background image supplies visual */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
