import HeroImage from "../assets/image/Image.png";
import AppStoreBtn from "../assets/icon/AppStoreBtn.svg";
import PlayStoreBtn from "../assets/icon/PlayStoreBtn.svg";
import DownArrow from "../assets/icon/DownArrow.svg";
import Container from "./ui/Container";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const moreInfo = [
    {
      heading: "Location",
      writeUp: "We are everywhere",
    },
    {
      heading: "Date",
      writeUp: "24/7 Online",
    },
    {
      heading: "Guest",
      writeUp: "No verification required",
    },
  ];
  return (
    <section className="bg-background py-20">
      <Container className="px-5">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div
            className="max-w-[521px] w-full"
            data-aos="fade-right"
            data-aos-duration="800"
          >
            <h1 className="volkhov-font font-bold text-5xl md:text-[64px] text-darkColor">
              Get started your{" "}
              <span className="text-supportingRed">bills payment</span> with us.
            </h1>
            <p className="mt-8 text-xl text-paragraph">
              Welcome to BlowPay, where convenience meets cutting-edge
              technology to redefine your mobile payment experience.
            </p>
            <div className="flex gap-[15px] mt-[31px]">
              <button>
                <img src={AppStoreBtn} alt="apple store" />
              </button>
              <button>
                <img src={PlayStoreBtn} alt="apple store" />
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="800"
            className="mt-14 lg:mt-0"
          >
            <img src={HeroImage} alt="hero image" />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="max-w-[841px] w-full mx-auto bg-white rounded-[10px] shadow-[0px_2px_80px_2px_rgba(0,0,0,0.06)] mt-14 py-9 px-6 flex flex-col md:flex-row gap-5 md:gap-0 md:justify-between items-center"
        >
          {moreInfo.map((info, i) => (
            <div key={i}>
              <p className="flex items-center gap-[5px] cursor-pointer text-darkColor font-medium">
                {info.heading} <img src={DownArrow} alt="" />
              </p>
              <p className="text-paragraph text-xs">{info.writeUp}</p>
            </div>
          ))}
          <button className="py-[14px] px-[35px] bg-supportingRed text-white font-medium text-lg shadow-[0px_8px_16px_0px_rgba(250,116,54,0.16)] rounded-[5px] mt-5 md:mt-0">
            Our Socials
          </button>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
