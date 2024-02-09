import ProjectList from "./ProjectList";
import Newproject from "./NewProject";

const Projects = () => {
  return (
    <>
      <h2 className="text-2xl font-medium tracking-tight">Projects</h2>
      <Newproject></Newproject>
      <ProjectList></ProjectList>
    </>
  );
};
export default Projects;
