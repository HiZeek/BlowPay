import HeroSection from "./components/HeroSection";
import PeopleAboutUs from "./components/PeopleAboutUs";
import Subscribe from "./components/Subscribe";
import ThingsYouNeed from "./components/ThingsYouNeed";
import Footer from "./layout/Footer";
import Header from "./layout/Header";

export default function App() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ThingsYouNeed />
      <PeopleAboutUs />
      <Subscribe />
      <Footer />
    </main>
  );
}
