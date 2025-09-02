import Banner from "../components/Banner";
import BestSeller from "../components/BestSeller";
import Category from "../components/Category";
import NewsLetter from "../components/NewsLetter";

/**
 * Home Page
 *
 * Redesigned with:
 * - structured layout using sections
 * - improved spacing for hierarchy
 * - consistent container width
 */
const Home = () => {
  return (
    <div>
      <Banner />
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <Category />
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <BestSeller />
        </div>
      </section>
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <NewsLetter />
        </div>
      </section>
    </div>
  );
};

export default Home;