import Container from "./ui/Container";
import Button from "../assets/icon/Slider-btn.svg";
import Testimonial from "../assets/image/TestimonialImage.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const PeopleAboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-white">
      <Container className="py-20 flex flex-col justify-center items-center md:flex-row md:gap-[60px] lg:gap-[120px] px-5">
        <div>
          <h3
            className="volkhov-font text-darkColor text-4xl md:text-5xl font-bold leading-[54px]"
            data-aos="fade-down"
          >
            What people say
            <br />
            <span className="text-supportingRed">about Us.</span>
          </h3>
          <p className="mt-6 mb-8 text-xl text-paragraph" data-aos="fade-left">
            Our Clients send us bunch of smilies with our services
            <br />
            and we love them.
          </p>
          <img
            src={Button}
            alt="btn"
            className="cursor-pointer"
            data-aos="fade-right"
          />
        </div>
        <div
          className="max-w-[504px] w-full mt-20 md:mt-0"
          data-aos="fade-left"
        >
          <div>
            <div className="bg-white relative w-full pt-7 px-[34px] pb-[34px] rounded-[10px] shadow-[0px_1.852px_3.148px_0px_rgba(0,0,0,0.00),0px_8.148px_6.519px_0px_rgba(0,0,0,0.01),0px_20px_13px_0px_rgba(0,0,0,0.01),0px_38.519px_25.481px_0px_rgba(0,0,0,0.01),0px_64.815px_46.852px_0px_rgba(0,0,0,0.02),0px_100px_80px_0px_rgba(0,0,0,0.02)]">
              <img
                src={Testimonial}
                alt="Testimonial img"
                className="w-[68px] h-[68px] absolute -top-12 -left-1 md:-top-8 md:-left-8"
              />
              <p className="font-medium leading-8 text-colorB1">
                “On the Windows talking painted pasture yet its
                <br />
                express parties use. Sure last upon he same as
                <br />
                knew next. Of believed or diverted no.”
              </p>
              <p className="text-darkColor text-lg font-semibold mt-[34px]">
                Mike taylor
              </p>
              <p className="font-medium text-sm text-paragraph mt-[5px]">
                Lahore, Pakistan
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PeopleAboutUs;
