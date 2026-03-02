const Contacts = () => {
  return (
    <section id="contact" className="py-20 bg-[#FDF6EC]">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Contact Us
        </h2>

        <form className="bg-white p-8 rounded-xl shadow-md space-y-6">
          <div>
            <label className="block mb-2 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C49A6C]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Email</label>
            <input
              type="email"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C49A6C]"
              placeholder="Your email"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Message</label>
            <textarea
              rows="4"
              className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#C49A6C]"
              placeholder="Your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#C49A6C] text-white py-3 rounded-lg hover:bg-[#8A6F4D] transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacts;
