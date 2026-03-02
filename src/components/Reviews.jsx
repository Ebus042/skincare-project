const Reviews = () => {
  const reviews = [
    {
      name: "Amaka O.",
      text: "My skin has never felt this smooth. The glow is unreal!",
    },
    {
      name: "Tolu A.",
      text: "Finally a cream made for African skin. No irritation at all.",
    },
    {
      name: "Chioma E.",
      text: "Worth every naira. I’m ordering again!",
    },
  ];

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          What Our Customers Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="p-8 border rounded-xl hover:shadow-lg transition duration-300"
            >
              <p className="text-gray-600 italic mb-4">“{review.text}”</p>
              <h4 className="font-semibold text-[#C49A6C]">{review.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
