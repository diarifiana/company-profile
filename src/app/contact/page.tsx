const ContactPage = () => {
  return (
    <div className="playfair-display-400 text-justify mx-auto bg-white">
      <h2 className="bg-[#c8b97e] text-white m-auto text-center text-3xl font-bold py-8 px-8 md:px-32">
        Contact Us
      </h2>
      <div className="text-black mx-auto max-w-screen-xl">
        <p className="text-[18px] pt-4 px-8 md:px-32">
          We'd love to hear from you! Whether you have a question about our
          products, need assistance with an order, or just want to share your
          feedback, our team is here to help. 1 Please use the form below, or
          choose from the other contact options to reach us. <br />
          <br />
          Our team is available to assist you during the following hours: Monday
          - Friday (8:30 a.m. - 5:00 p.m)
          <br />
          <br />
          <span className="font-semibold">
            contactamber@jewelry.com <br />
            +62211234567
          </span>
        </p>{" "}
        <h3 className="font-bold text-xl pt-12 pb-4 px-8 md:px-32">
          Shipment & Returns
        </h3>
        <p className="text-[18px] px-8 md:px-32">
          We want your shopping experience with us to be seamless and enjoyable.
          Here's everything you need to know about our shipment and return
          policies. Orders are typically processed within 3-5 business days.
          You'll receive a confirmation email with tracking information once
          your order has shipped.
          <br /> <br />
          We offer a 24-hours return policy on all unworn and undamaged items.
          To initiate a return, please contact our customer service team. If
          you'd like to exchange an item, please contact our customer service
          team. We'll assist you with the exchange process. All refunds will be
          processed to the original payment method within 5-7 business days of
          receiving the returned item.
        </p>{" "}
        <h3 className="font-bold text-xl pt-12 pb-4 px-8 md:px-32">
          Jewelry Care
        </h3>
        <p className="text-[18px] px-8 md:px-32">
          To keep your precious jewelry looking its best, proper care is
          essential. Here are some tips to maintain the beauty and longevity of
          your pieces.
          <br />
          <br />
          <ul className="text-[18px] px-8 md:text-left md:px-0">
            <li>
              #1 Store your jewelry in a clean, dry place, away from direct
              sunlight and extreme temperatures. Use individual pouches or
              jewelry boxes to prevent scratches and tangling
            </li>
            <br />
            <li>
              #2 Avoid exposing your jewelry to harsh chemicals, such as
              perfumes, lotions, and cleaning products. Remove your jewelry
              before swimming, showering, or exercising.
            </li>
            <br />
            <li>
              #3 Gently clean your jewelry with a soft cloth after each wear.
              For deeper cleaning, use a mild soap and warm water solution.
            </li>
          </ul>
        </p>{" "}
      </div>
    </div>
  );
};

export default ContactPage;
