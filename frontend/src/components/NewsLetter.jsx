// components/NewsLetter.jsx
const NewsLetter = () => {
    return (
        <section className="py-16 px-6 bg-indigo-50">
            <div className="container max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Stay Updated
                </h2>
                <p className="text-gray-600 mb-6">
                    Join our newsletter to receive the latest offers and product
                    updates.
                </p>
                <form className="flex flex-col sm:flex-row gap-4 justify-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="px-4 py-3 rounded-lg border border-gray-300 flex-1 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </section>
    );
};
export default NewsLetter;
