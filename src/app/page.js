import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import Wizard from "@/components/models/Wizard";
import Navigation from "@/components/navigation";
import Witch from "@/components/models/Witch";
import magictome from "../../website images/magictome.png";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />

      <div className="w-full h-screen">
        {}
        <Navigation />
        {/* <Image
          src={magictome}
          width={500}
          height={500}
          alt="Picture of a magical book"
          
        /> */}
        <RenderModel>
          <Wizard />
          {/* <Witch/> */}
        </RenderModel>
      </div>
    </main>
  );
}
