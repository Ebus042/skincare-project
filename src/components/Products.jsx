import cream from "../assets/cream.png";
import serum from "../assets/serum.png";
import facewash from "../assets/facewash.png";

const Products = () => {
  const products = [
    { name: "Glow Face Cream", price: "₦15,000", image: facewash },
    { name: "Hydrating Body Butter", price: "₦18,000", image: cream },
    { name: "Vitamin C Serum", price: "₦22,000", image: serum },
  ];

  return (
    <section id="products" className="py-20 bg-[#FDF6EC]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Our Best Sellers</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:scale-105 transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full mb-4"
              />
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-[#C49A6C] font-bold mt-2">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
