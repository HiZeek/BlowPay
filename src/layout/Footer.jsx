import Logo from "../assets/icon/Logo.svg";
import BlowPay from "../assets/icon/BLOWPAY42.svg";
import FacebookIcon from "../assets/icon/FacebookIcon.svg";
import TwitterIcon from "../assets/icon/TwitterIcon.svg";
import InstagramIcon from "../assets/icon/InstagramIcon.svg";
import Container from "../components/ui/Container";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialIcons = [
    {
      icon: FacebookIcon,
    },
    {
      icon: InstagramIcon,
    },
    {
      icon: TwitterIcon,
    },
  ];

  const footerDetails = [
    {
      title: "Company",
      link: [
        { link: "About" },
        { link: "Careers" },
        { link: "Privacy & Policy" },
      ],
    },
    {
      title: "Contact",
      link: [{ link: "Help/FAQ" }, { link: "Press" }, { link: "Affilates" }],
    },
    {
      title: "More",
      link: [{ link: "Press Centre" }, { link: "Our Blog" }],
    },
  ];
  return (
    <footer className="pt-[240px] pb-20 bg-background2">
      <Container className="px-5">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div>
            <div className="flex cursor-pointer">
              <img src={BlowPay} alt="logo" />
              <img src={Logo} alt="logo" />
            </div>
            <p className="font-medium text-paragraph my-5">
              Pay bills with us, get full
              <br />
              Control of your subscription.
            </p>
            <div className="flex gap-[26px]">
              {socialIcons.map((img, i) => (
                <a key={i} to="#">
                  <img
                    src={img.icon}
                    alt="Social Icon"
                    className="w-10 h-10 cursor-pointer"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="flex flex-col mt-5 md:mt-0 md:flex-row gap-5 md:gap-[50px] lg:gap-[130px]">
            {footerDetails.map((detail, i) => (
              <div key={i}>
                <h6 className="text-darkColor text-lg font-semibold">
                  {detail.title}
                </h6>
                <div className="flex flex-col">
                  {detail.link.map((link, i) => (
                    <a href="#" key={i} className="text-paragraph text-lg">
                      {link.link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className="my-10" />
        <div className="flex flex-col gap-2 md:gap-0 text-center md:flex-row justify-between text-paragraph">
          <p>Copyright, BlowPay {currentYear}. All rights reserved.</p>
          <a href="#">Terms & Conditions</a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
