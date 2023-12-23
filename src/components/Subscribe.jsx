import Container from "./ui/Container";
import Mail from "../assets/icon/Mail.svg";
import Curves from "../assets/icon/Curves.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Subscribe = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="bg-background">
      <Container className="px-5">
        <div
          data-aos="fade-up"
          className="bg-supportingRed py-10 md:py-20 rounded-2xl -mb-[120px] relative z-10"
        >
          <h3 className="volkhov-font text-center text-white text-3xl md:text-5xl font-bold">
            Subscribe and get exclusive
            <br />
            deals & offer
          </h3>
          <div className="px-5">
            <div className="flex items-center mt-8 md:mt-16 max-w-[674px] w-full bg-white rounded-[10px] mx-auto py-[9px] pl-[22px] pr-[9px]">
              <div className="w-full flex gap-2">
                <img src={Mail} alt="mail icon" />
                <input
                  placeholder="Enter your mail"
                  type="text"
                  className="w-full outline-none"
                />
              </div>
              <button className="bg-supportingRed text-white rounded-[10px] py-[13px] px-[26px]">
                Subscribe
              </button>
            </div>
          </div>
          <img src={Curves} alt="icon" className="absolute bottom-0 -z-20" />
        </div>
      </Container>
    </section>
  );
};

export default Subscribe;
