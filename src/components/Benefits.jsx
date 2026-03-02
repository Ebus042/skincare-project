const Benefits = () => {
  const benefits = [
    {
      title: "Deep Hydration",
      desc: "Locks in moisture for 24 hours without clogging pores.",
    },
    {
      title: "Even Skin Tone",
      desc: "Improves texture and restores natural glow.",
    },
    {
      title: "UV Protection",
      desc: "Shields skin from harsh sun exposure.",
    },
  ];

  return (
    <section id="benefits" className="py-20 bg-[#FDF6EC]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-[#2B2B2B]">
          Powerful Skin Benefits
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-4 text-[#C49A6C]">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
