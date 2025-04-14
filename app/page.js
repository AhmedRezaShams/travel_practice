import Image from "next/image";
import Header from "./view/Header";
import Hero from "./view/Hero";
import PopularTours from "./view/PopularTours";

export default function Home() {
  return (
    <div className="bg-white">
      <Header />
      <Hero />
      <PopularTours />
    </div>

  );
}
