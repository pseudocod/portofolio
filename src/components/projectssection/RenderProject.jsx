export const renderProject = (project) => (
  <div className="flex justify-center items-center">
    <a
      href={project.link}
      className="text-[3vw] hover:opacity-25 cursor-pointer transition-opacity"
    >
      {project.name}
    </a>
  </div>
);
