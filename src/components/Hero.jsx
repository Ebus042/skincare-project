import model from "../assets/hero-model.png";
import cream from "../assets/cream.png";
import serum from "../assets/serum.png";
import facewash from "../assets/facewash.png";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#fdf6f2] to-[#fdeee6] min-h-screen flex items-center">
      <div className="container mx-auto px-10 grid md:grid-cols-2 items-center gap-10">
        {/* LEFT CONTENT */}
        <div>
          <p className="tracking-widest text-gray-600 mb-4">
            NATURAL & ORGANIC
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Reveal Your <span className="text-orange-500">Natural</span> Glow
          </h1>

          <p className="text-gray-600 mb-8 text-lg">
            Healthy skin starts with GlowEssence.
          </p>

          <div className="flex items-center gap-6">
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition">
              Shop Now →
            </button>

            <button className="flex items-center gap-2 text-gray-700">
              ▶ Watch Story
            </button>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="relative flex justify-center">
          {/* Model */}
          <img src={model} alt="model" className="w-[400px] relative z-10" />

          {/* Product Cards */}
          <div className="absolute bottom-0 left-0 bg-white p-4 rounded-xl shadow-lg">
            <img src={cream} alt="cream" className="w-24" />
          </div>

          <div className="absolute bottom-10 right-0 bg-white p-4 rounded-xl shadow-lg">
            <img src={serum} alt="serum" className="w-20" />
          </div>

          <div className="absolute top-20 right-10 bg-white p-4 rounded-xl shadow-lg">
            <img src={facewash} alt="facewash" className="w-20" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
