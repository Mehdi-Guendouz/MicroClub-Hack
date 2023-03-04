import { BodySection } from "../components/BodySection";
import { Navbar } from "../components/Navbar";
import { About } from "./About";
import { Offers } from "./Offers";

export const Home = () => {
  return (
    <section className="flex flex-col gap-[10rem]  bg-[#f3f3f3]">
      <Navbar />
      <BodySection />
      <About />
      <Offers />
    </section>
  );
};
