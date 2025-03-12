import Image from "next/image";
import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah",
      role: "Working Mom",
      description:
        "I absolutely adore my personalized initial necklace from Amber & Co! The craftsmanship is exquisite, and the sterling silver is so lustrous. I was able to customize the font and add my birthstone, making it truly unique. I wear it every day and get so many compliments. I'll definitely be back for more!",
      src: "/sarah.jpg",
    },
    {
      name: "Dewi",
      role: "Fashion Blogger",
      description:
        "I love how I can mix and match them to create different looks. They're perfect for both casual and dressy occasions. The quality is excellent, and they arrived beautifully packaged. I've already recommended Amber & Co to all my followers!",
      src: "/dewi.jpg",
    },
  ];

  return (
    <main className="py-8 px-4 grid md:grid-cols-2 gap-8 md:px-32 bg-white max-w-screen-xl mx-auto">
      {testimonials.map((testimonial, index) => (
        <figure className="max-w-screen-md mx-auto text-center" key={index}>
          <svg
            className="w-10 h-10 mx-auto mb-3 text-[#c8b97e]  pt-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 18 14"
          >
            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
          </svg>
          <blockquote>
            <p className="text-lg italic font-medium text-gray-900 ">
              {testimonial.description}
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
            <div className="relative w-[50px] h-[50px]">
              <Image
                className="rounded-full object-cover"
                src={testimonial.src}
                alt="profile picture"
                fill
              />
            </div>
            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 ">
              <cite className="pe-3 font-medium text-gray-900 ">
                {testimonial.name}
              </cite>
              <cite className="ps-3 text-sm text-gray-500 ">
                {testimonial.role}
              </cite>
            </div>
          </figcaption>
        </figure>
      ))}
    </main>
  );
};

export default Testimonials;
