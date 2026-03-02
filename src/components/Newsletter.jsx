const Newsletter = () => {
  return (
    <section className="py-20 bg-[#2B2B2B] text-white text-center">
      <h2 className="text-3xl font-bold mb-6">Get 10% Off Your First Order</h2>

      <div className="flex justify-center">
        <input
          type="email"
          placeholder="Enter your email"
          className="px-4 py-3 rounded-l-full text-black w-64"
        />
        <button className="bg-[#C49A6C] px-6 py-3 rounded-r-full hover:bg-[#8A6F4D] transition">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
