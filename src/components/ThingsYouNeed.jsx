import Container from "./ui/Container";
import Plane from "../assets/icon/Plane.svg";
import Plane1 from "../assets/icon/Plane1.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const ThingsYouNeed = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const todo = [
    {
      title: "Sign Up",
      subTitle:
        "Completes all the work associated with planning and processing",
      bg: "bg1",
      dataOs: "fade-right",
      duration: "800",
    },
    {
      title: "Worth of Money",
      subTitle:
        "After successful access then book from exclusive deals & pricing",
      bg: "bg",
      dataOs: "fade-up",
    },
    {
      title: "Exciting Data Experience",
      subTitle:
        "Start and explore a wide range of exciting data experience with our global data services.",
      bg: "bg1",
      dataOs: "fade-left",
      duration: "800",
    },
  ];
  return (
    <section className="bg-background2 ">
      <Container className="relative py-20 px-5">
        <div className="absolute -top-[50px] right-6 md:right-0">
          <img src={Plane1} alt="icon" />
          <img src={Plane} alt="icon" />
        </div>
        <div data-aos="fade-up" data-aos-duration="800">
          <h3 className="volkhov-font text-darkColor text-4xl md:text-5xl font-bold text-center">
            Things you need <span className="text-supportingRed">to do</span>
          </h3>
          <p className="max-w-[482px] w-full text-center mx-auto mt-6 text-paragraph text-lg">
            We ensure that you’ll embark on a perfectly data
            <br />
            plans at a price you can afford.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-[30px] mt-16">
          {todo.map((todo, i) => (
            <div
              data-aos={todo.dataOs}
              data-aos-duration={todo.duration}
              key={i}
              className={`px-10 py-10 flex flex-col justify-end ${todo.bg} bg-center bg-cover h-[275px] bg-white max-w-[370px] w-full rounded-lg`}
            >
              <p className="text-darkColor font-semibold text-2xl">
                {todo.title}
              </p>
              <p className="text-paragraph mt-4">{todo.subTitle}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ThingsYouNeed;
