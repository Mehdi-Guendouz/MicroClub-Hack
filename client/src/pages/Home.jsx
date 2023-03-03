import { BodySection } from "../components/BodySection";
import { Navbar } from "../components/Navbar";

export const Home = () => {
  return (
    <section className="px-6 bg-[#f3f3f3]">
      <Navbar />
      <BodySection />
    </section>
  );
};
