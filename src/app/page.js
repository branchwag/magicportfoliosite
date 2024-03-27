import Image from "next/image";
import bg from "../../public/background/home-background.png";
import RenderModel from "@/components/RenderModel";
import Witch from "@/components/models/Witch";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="background-image"
        fill
        className="w-full h-full object-cover object-center opacity-25"
      />
      <div className="w-full h-screen">
        {
          <RenderModel>
            <Witch />
          </RenderModel>
        }
      </div>
    </main>
  );
}
