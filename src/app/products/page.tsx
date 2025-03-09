import React from "react";

const ProductPage = () => {
  // Sample product data (replace with your actual data)
  const products = [
    {
      id: 1,
      name: "Initial Necklaces",
      price: "IDR 300,000",
      review: "4.8",
      src: "/initial.jpg",
      description:
        "Personalize your style with our elegant Initial Necklaces. Crafted with high-quality materials, these necklaces make a perfect gift or a special treat for yourself. Choose your initial and carry a piece of your identity with you.",
      history:
        "Inspired by the timeless tradition of personalized jewelry, our Initial Necklaces are designed to celebrate individuality.",
      crafting:
        "Each necklace begins with a hand-selected, high-quality metal. The initial is meticulously cut and polished before being delicately attached to a durable chain. Our artisans pay close attention to detail, ensuring a flawless finish.",
    },
    {
      id: 2,
      name: "Stackable Rings",
      price: "IDR 500,000",
      review: "5.0",
      src: "/ring.jpg",
      description:
        "Create your own unique look with our Stackable Rings. Mix and match different styles and finishes to express your individuality. These rings are designed to be comfortable for everyday wear and add a touch of sophistication to any ensemble.",
      history:
        "The concept of stackable rings has roots in ancient jewelry traditions, where multiple rings symbolized status and personal style. We've modernized this concept with versatile designs that allow for endless combinations.",
      crafting:
        "Our Stackable Rings are crafted using a combination of traditional and modern techniques. Each ring is shaped, soldered, and polished by skilled artisans. We use a variety of finishes, from polished metals to textured surfaces, to create unique and complementary pieces.",
    },
    {
      id: 3,
      name: "Delicate Chain Bracelets",
      price: "IDR 250,000",
      review: "4.7",
      src: "/chain.jpg",
      description:
        "Add a subtle sparkle to your wrist with our Delicate Chain Bracelets. These lightweight bracelets are perfect for layering or wearing alone for a minimalist look. Made with attention to detail, they are a timeless addition to your jewelry collection.",
      history:
        "Delicate chain bracelets have been a staple in jewelry collections for centuries, representing understated elegance. Our designs draw inspiration from classic styles while incorporating modern sensibilities.",
      crafting:
        "Our Delicate Chain Bracelets are meticulously crafted using fine chains and high-quality clasps. Each link is carefully connected, and the bracelet is polished to a brilliant shine. We offer a variety of chain styles and finishes to suit different tastes.",
    },
    {
      id: 4,
      name: "Statement Earrings",
      price: "IDR 500,000",
      review: "4.9",
      src: "/earring.jpg",
      description:
        "Make a bold statement with our stunning Statement Earrings. These eye-catching earrings are designed to elevate your look for any occasion. From elegant designs to modern styles, find the perfect pair to express your unique personality.",
      history:
        "Statement Earrings have a rich history, dating back to ancient civilizations where they were used to signify status and style. Our designs are inspired by a variety of historical and contemporary influences.",
      crafting:
        "Our Statement Earrings are crafted using a combination of traditional goldsmithing techniques and modern design principles. Each earring is meticulously assembled, and the gemstones or other embellishments are carefully set. We pay close attention to balance and proportion, ensuring that each pair makes a striking yet comfortable statement.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 playfair-display-400">
      <h2 className="text-3xl font-bold text-center pb-8 text-[#c8b97e]">
        Our Products
      </h2>
      <div>
        {/* Image Gallery */}
        <div className="space-y-4">
          {products.map((product) => (
            <div className="grid md:grid-cols-2 gap-4 py-4">
              <div>
                <img
                  src={product.src}
                  alt={`${product.name}`}
                  className="w-full rounded-lg"
                />
              </div>
              <div className="py-4 m-auto">
                <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>
                <p className="text-gray-700 mb-6">{product.description}</p>

                <h2 className="text-xl font-semibold mb-4 text-[#c8b97e]">
                  History
                </h2>
                <p className="text-gray-700 mb-6">{product.history}</p>

                <h2 className="text-xl font-semibold mb-4 text-[#c8b97e]">
                  Crafting
                </h2>
                <p className="text-gray-700 mb-6">{product.crafting}</p>

                <p className="text-xl font-bold mb-6">{product.price}</p>
                <a href="https://api.whatsapp.com/" target="_blank">
                  <button className="bg-[#c8b97e] hover:bg-white hover:text-[#c8b97e] text-white font-bold py-2 px-4 rounded">
                    Shop Now
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
