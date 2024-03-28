import Image from "next/image";
import bg from "../../../public/background/projects-background.png";
import ProjectList from "@/components/projects";
import { projectsData } from "../data";
import RenderModel from "@/components/RenderModel";
import Staff from "@/components/models/Staff";

export default function Projects() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between relative">
      <Image
        src={bg}
        alt="background-image"
        fill
        className="-z-50 w-full h-full object-cover object-center opacity-50"
      />
      <ProjectList projects={projectsData} />

      <div className="flex items-center justify-center fixed  top-16  lg:top-20 -translate-x-1/2 lg:translate-x-20 -z-10 left-1/2 lg:-left-20 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </main>
  );
}
