import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export const generateMetadata = () => {
  return {
    title: "Amber & Co",
    description:
      "Sustainable and ethically sourced jewelry that embodies beauty, responsibility, and enduring value",
    openGraph: {
      images: "/jewelry.avif",
    },
  };
};

export default function Home() {
  return (
    <div className="bg-white playfair-display-400">
      <Hero />

      <div className="p-8 md:px-32 text-lg text-justify">
        <p>
          Inspired by the beauty of Yogyakarta,{" "}
          <span className="font-bold">Amber & Co </span>was established in 2010.
          What started as a small workshop has blossomed into a thriving jewelry
          house, thanks to our unwavering dedication to innovation and customer
          satisfaction. We continue to evolve, always striving to create pieces
          that inspire and delight.
        </p>
        <br />
        <p>
          Our culture is woven with the same threads of beauty, passion, and
          artistry. We believe in fostering a creative and collaborative
          environment where every artisan is empowered to express their unique
          vision, prioritize ethical sourcing, meticulous craftsmanship, and a
          genuine love for the stories our jewelry tells. We strive to create a
          workplace where inspiration flourishes, and every piece reflects the
          heart of our collective dedication to creating timeless treasures.
        </p>
      </div>

      <Products />
      <Testimonials />
    </div>
  );
}
