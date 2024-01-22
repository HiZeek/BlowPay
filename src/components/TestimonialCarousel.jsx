import Testimonial from "../assets/image/TestimonialImage.png";

const TestimonialCarousel = () => {
  return (
    <div className="bg-white relative w-full pt-7 px-[34px] pb-[34px] rounded-[10px] shadow-[0px_1.852px_3.148px_0px_rgba(0,0,0,0.00),0px_8.148px_6.519px_0px_rgba(0,0,0,0.01),0px_20px_13px_0px_rgba(0,0,0,0.01),0px_38.519px_25.481px_0px_rgba(0,0,0,0.01),0px_64.815px_46.852px_0px_rgba(0,0,0,0.02),0px_100px_80px_0px_rgba(0,0,0,0.02)]">
      <img
        src={Testimonial}
        alt="Testimonial img"
        className="w-[68px] h-[68px] absolute -top-12 -left-1 md:-top-8 md:-left-8"
      />
      <p className="font-medium leading-8 text-colorB1">
        “On the Windows talking painted pasture yet its <br />
        nexpress parties use. Sure last upon he same as <br />
        knew next. Of believed or diverted no.”
      </p>
      <p className="text-darkColor text-lg font-semibold mt-[34px]">
        Mike taylor
      </p>
      <p className="font-medium text-sm text-paragraph mt-[5px]">
        Lahore, Pakistan
      </p>
    </div>
  );
};

export default TestimonialCarousel;
