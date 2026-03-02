import model from "../assets/hero-model.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:flex items-center gap-10">
        <div className="md:w-1/2">
          <img src={model} alt="Model" className="rounded-xl shadow-lg" />
        </div>

        <div className="md:w-1/2 space-y-6 mt-10 md:mt-0">
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className="text-gray-600">
            We create skincare solutions designed specifically for melanin-rich
            skin, combining nature and science.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
