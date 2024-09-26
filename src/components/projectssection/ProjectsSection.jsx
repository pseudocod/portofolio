import { renderProject } from "./RenderProject";

export default function ProjectsSection() {
  const completedProjects = [
    {
      name: "Full-Stack E-Commerce Project",
      link: "/projects/oricand",
    },
    {
      name: "Full-Stack Blog Project",
      link: "/projects/oricand",
    },
    {
      name: "Full-Stack Banking Project",
      link: "/projects/oricand",
    },
    {
      name: "Spring Boot Backend Project",
      link: "/projects/oricand",
    },
    {
      name: "ASP.NET CORE Backend Project",
      link: "/projects/oricand",
    },
    {
      name: "File System Analyzer Project",
      link: "/projects/oricand",
    },
    {
      name: "Portfolio",
      link: "/projects/oricand",
    },
  ];

  const inProgressProjects = [
    {
      name: "Premier League Full-Stack Project",
      link: "/projects/inprogress1",
    },
  ];

  return (
    <>
      <div className="flex justify-center items-center flex-col mt-20">
        <h1 className="text-8xl">PROJECTS</h1>

        <div className="relative mt-20 flex flex-col gap-5 mb-10">
          {completedProjects.map(renderProject)}
        </div>

        <div className="mb-10">
          <h1 className="text-6xl font-bold text-[#112A46]">IN PROGRESS</h1>
        </div>

        <div className="relative mt-5 flex flex-col gap-5 mb-52">
          {inProgressProjects.map(renderProject)}
        </div>
      </div>
    </>
  );
}
