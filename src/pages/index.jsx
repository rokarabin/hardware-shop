import Card from "@/components/card";
import ProductCards from "@/components/Productcard";
import Carousel from "@/layout/carousel";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Carousel />
      <ProductCards />
      <Card />
      <div className="companies bg-[#F5EDE1] text-[#21463D] font-extrabold text-2xl text-center px-4 py-2">
        <h1>Our Partner Company</h1>
        <img
          src="/images/partner.png"
          className="text-center m-auto py-3"
        ></img>
      </div>
    </>
  );
}
