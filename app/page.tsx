import Image from "next/image";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import OurServices from "@/components/home/OurServices";
import UserParts from "@/components/home/UsedParts";
import WhyUs from "@/components/home/WhyUs";




export default function Home() {
  return (
          <>
         <HomeHeroSection />
         <OurServices />
          <UserParts />
          <WhyUs />
         </>
  );
}
