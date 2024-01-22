import Container from "./ui/Container";
import Button from "../assets/icon/Slider-btn.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import TestimonialCarousel from "./TestimonialCarousel";

const PeopleAboutUs = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-white">
      <Container className="py-20 flex flex-col justify-center items-center md:flex-row md:gap-[60px] lg:gap-[120px] px-5">
        <div>
          <h3
            className="volkhov-font text-darkColor text-4xl md:text-5xl font-bold md:leading-[54px]"
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
          <TestimonialCarousel />
        </div>
      </Container>
    </section>
  );
};

export default PeopleAboutUs;
