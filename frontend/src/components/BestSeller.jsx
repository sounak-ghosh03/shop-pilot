// Filename: components/BestSeller.jsx
import { useAppContext } from "../context/AppContext";
import ProductCard from "./ProductCard";

/**
 * BestSeller Section
 *
 * Redesigned with:
 * - unified card design system
 * - improved responsiveness (grid layout)
 * - accessible section heading
 * - consistent spacing & visual hierarchy
 *
 * Preserves functionality: maps over products and uses ProductCard.
 */
const BestSeller = () => {
  const { products } = useAppContext();

  return (
    <section
      aria-labelledby="best-seller-heading"
      className="bg-gray-50 py-12 sm:py-16 lg:py-20"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
          <h2
            id="best-seller-heading"
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800"
          >
            Best Sellers
          </h2>
          <p className="text-gray-600 max-w-md text-sm md:text-base">
            Discover what shoppers love most. These top-selling items are in
            demand for a reason — don’t miss out!
          </p>
        </div>

        {products?.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.slice(0, 8).map((item) => (
              <ProductCard key={item._id} product={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            No best sellers available at the moment.
          </div>
        )}
      </div>
    </section>
  );
};

export default BestSeller;
