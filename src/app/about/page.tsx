import Carousel from "@/components/Carousel";
import TeamCardUser from "./_components/TeamCard";

const AboutPage = () => {
  return (
    <div className="playfair-display-400 text-justify">
      <h2 className="bg-[#c8b97e] text-white m-auto text-center text-3xl font-bold py-8 px-8 md:px-32">
        Crafting Timeless Elegance: Our Story at Amber & Co
      </h2>
      <div>
        {" "}
        <Carousel
          images={["/img1.avif", "/img2.avif", "/img3.avif", "/img4.jpeg"]}
        />
      </div>
      <p className="text-[18px] pt-4 px-8 md:px-32">
        Welcome to <span className="font-bold ">Amber & Co!</span> Where the art
        of jewelry transcends mere adornment. We believe in crafting pieces that
        tell stories, celebrate milestones, and become cherished heirlooms.
        Discover the heart behind our creations and the journey that brought us
        here.
      </p>{" "}
      <br />
      <h3 className="font-bold text-xl pb-4 px-8 md:px-32">History</h3>
      <p className="text-[18px] px-8 md:px-32">
        <span className="font-bold ">Amber & Co.</span> was founded in 2010,
        driven by a passion for timeless handcrafted jewelry. What began as a
        small workshop has blossomed into a renowned jewelry house, celebrated
        for its commitment to sustainability. We have remained dedicated to
        preserving traditional techniques while embracing modern innovation.
      </p>{" "}
      <br />
      <h3 className="font-bold text-xl pb-4 px-8 md:px-32">Our Culture</h3>
      <p className="text-[18px] px-8 md:px-32">
        We cultivate a culture of craftsmanship, sustainability, and heartfelt
        connection. We believe in the power of jewelry to express individuality
        and create lasting memories. We are committed to ethical sourcing,
        sustainable practices, and building genuine relationships with our
        customers, ensuring that every interaction reflects the warmth and
        authenticity that defines <span className="font-bold ">Amber & Co</span>
        .
      </p>{" "}
      <br />
      <h3 className="font-bold text-xl pb-4 px-8 md:px-32">Our Team</h3>
      <p className="text-[18px] px-8 md:px-32">
        Meet our team, a collective of passionate artisans, designers, and
        experts, each contributing their unique skills and creativity. We
        believe in the power of collaboration and the beauty of shared vision.
        Together, we are committed to creating jewelry that not only dazzles but
        also resonates with the values of craftsmanship, sustainability, and
        heartfelt connection.
      </p>
      <br />
      <TeamCardUser
        title="Lead Designer"
        description="With a background in fine arts and jewelry design and has a keen eye for detail and a passion for sourcing unique gemstones, our team member believes that each piece should tell a story, evoking emotions and celebrating the beauty of the human spirit."
      />
      <TeamCardUser
        title="Master Goldsmith & Artisan"
        description="Passionated for metalwork began at a young age and apprenticed with renowned jewelers, honing skills in casting, setting, and finishing. Our team member is particularly skilled in creating delicate filigree and intricate engravings."
      />
      <TeamCardUser
        title="Client Relations"
        description="The warm and welcoming face of Amber & Co, building strong relationships with clients and guiding them through the selection process. She also possesses a deep knowledge of gemstones, ensuring that each client finds the perfect piece to match their unique style and personality."
      />
    </div>
  );
};

export default AboutPage;
