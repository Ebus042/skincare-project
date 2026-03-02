const Features = () => {
  const features = [
    { title: "Natural Ingredients", desc: "No harsh chemicals, 100% safe." },
    { title: "Dermatologist Tested", desc: "Clinically approved formulas." },
    { title: "Made for African Skin", desc: "Hydration without irritation." },
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
