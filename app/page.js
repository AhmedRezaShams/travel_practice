import Image from "next/image";
import Header from "./view/Header";
import Hero from "./view/Hero";
import PopularTours from "./view/PopularTours";
import Destinations from "./view/Destinations";

export default function Home() {
  return (
    <div className="bg-white mx-auto my-8 max-w-[1200px] px-4">
      <Header />
      <Hero />
      <PopularTours />
      <Destinations/>
      
    </div>

  );
}
