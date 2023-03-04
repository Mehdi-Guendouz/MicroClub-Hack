import { BodySection } from "../components/BodySection";
import { Navbar } from "../components/Navbar";
import { About } from "./About";
import { Features } from "./Features";
import { Footer } from "./Footer";
import { Offers } from "./Offers";

export const Home = () => {
  return (
    <section className="flex flex-col   bg-[#f3f3f3]">
      <Navbar />
      <BodySection />
      <About />
      <Offers />
      <Features />
      <Footer />
    </section>
  );
};
