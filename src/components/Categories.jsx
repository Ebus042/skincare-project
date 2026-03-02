const categories = ["Cleansers", "Toners", "Serums", "Moisturizers", "Suncare"];

const Categories = () => {
  return (
    <div className="bg-white py-10">
      <div className="container mx-auto px-10 grid grid-cols-2 md:grid-cols-5 gap-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-[#fdf6f2] p-6 text-center rounded-xl hover:shadow-md transition cursor-pointer"
          >
            <p className="font-medium text-gray-700">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
