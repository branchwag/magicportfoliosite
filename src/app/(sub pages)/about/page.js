import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import RenderModel from "@/components/RenderModel";
// import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";
//import Hat from "@/components/models/Hat";
const Hat = dynamic(() => import("@/components/models/Hat"), {
  ssr: false,
});

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="about page background image of a magical forest"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0 z-10">
        <RenderModel>
          <Hat />
        </RenderModel>
      </div>

      <div className="relative w-full h-screen flex flex-col items-center justify-center">
        <div className="absolute flex flex-col items-center text-center top-1/2 sm:top-[60%] left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className="font-bold  text-6xl xs:text-7xl sm:text-8xl  lg:text-9xl text-accent">
            @branchwag
          </h1>
          <p className="font-light text-foreground text-lg">
            Meet the sorceress behind this portfolio...
          </p>
          <p className="font-light text-foreground">
            I am a NYC-based FIX integration engineer and overall coding
            enthusiast, building all sorts of fun apps when I am not working on
            FIX Protocol projects. I enjoy biking around this wonderful city and
            sipping iced matcha lattes (preferably not at the same time!). I
            also serve as lead sorceress (aka Dungeon Master) for a long-running
            D&D campaign. Feel free to get in touch!
          </p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}
