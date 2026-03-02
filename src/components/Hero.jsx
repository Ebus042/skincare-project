import model from "../assets/hero-model.png";

const Hero = () => {
  return (
    <section id="home" className="bg-[#FDF6EC] min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:flex items-center justify-between">
        {/* Text */}
        <div className="md:w-1/2 space-y-6 mt-24">
          <h1 className="text-4xl md:text-6xl font-bold text-[#2B2B2B] leading-tight">
            Glow Naturally. Shine Confidently.
          </h1>
          <p className="text-gray-600 text-lg">
            Premium skincare crafted for melanin-rich skin. Nourish, protect and
            radiate confidence.
          </p>
          <button className="bg-[#C49A6C] text-white px-8 py-3 rounded-full hover:bg-[#8A6F4D] transition duration-300">
            Shop Collection
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2 mt-0 md:mt-0 w-[600px] mx-auto">
          <img src={model} alt="Cream Product" className="w-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
