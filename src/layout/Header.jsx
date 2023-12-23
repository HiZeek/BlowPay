import Logo from "../assets/icon/Logo.svg";
import BlowPay from "../assets/icon/BLOWPAY42.svg";
import Close from "../assets/icon/x-mark.svg";
import Open from "../assets/icon/menu.svg";
import Container from "../components/ui/Container";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  }, [menuOpen]);

  return (
    <header className="bg-background">
      <Container>
        {/* DESKTOP */}
        <div className="lg:flex justify-between items-center h-20 hidden px-5">
          <div className="flex cursor-pointer">
            <img src={BlowPay} alt="logo" />
            <img src={Logo} alt="logo" />
          </div>
          <div className="flex gap-8 text-darkColor">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Download</a>
          </div>
          <div className="flex items-center gap-14">
            <a href="#" className="text-darkColor">
              Login
            </a>
            <button className="text-white bg-black rounded-[5px] py-[13px] px-[50px]">
              Sign up
            </button>
          </div>
        </div>

        {/* MOBILE */}
        <div className="p-5 lg:hidden">
          <div className="flex justify-between">
            <div className="flex cursor-pointer">
              <img src={BlowPay} alt="logo" />
              <img src={Logo} alt="logo" />
            </div>
            <img
              src={Open}
              alt="Close"
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer"
            />
          </div>
        </div>
        {/* {!menuOpen ? (
          <div className="p-5 lg:hidden">
            <div className="flex justify-between">
              <div className="flex cursor-pointer">
                <img src={BlowPay} alt="logo" />
                <img src={Logo} alt="logo" />
              </div>
              <img
                src={Open}
                alt="Close"
                onClick={() => setMenuOpen(true)}
                className="cursor-pointer"
              />
            </div>
          </div>
        ) : ( */}
        {menuOpen && (
          <div
            data-aos="fade-right"
            className={`fixed top-0 left-0 z-30 bg-background h-screen w-screen flex flex-col gap-20 p-10 ${
              menuOpen ? "aos-init" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex cursor-pointer">
                <img src={BlowPay} alt="logo" />
                <img src={Logo} alt="logo" />
              </div>
              <img
                src={Close}
                alt="Close"
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer transition-all duration-300 ease-in-out transform "
              />
            </div>
            <div className="flex flex-col justify-center items-center gap-8 text-darkColor">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Download</a>
            </div>
            <div className="flex flex-col justify-center items-center gap-8">
              <a href="#" className="text-darkColor">
                Login
              </a>
              <button className="text-white bg-black rounded-[5px] py-[13px] px-[50px]">
                Sign up
              </button>
            </div>
          </div>
        )}
        {/* )} */}
      </Container>
    </header>
  );
};

export default Header;
