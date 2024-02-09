import { RouterProvider } from "react-router-dom";
import { useContext } from "react";

import router from "./routes";
import { ThemeContext } from "./context/theme";
import { ProjectsProvider } from "./context/projects/context";
import { MembersProvider } from "./context/members/context";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`h-screen w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}
    >
      <MembersProvider>
        <ProjectsProvider>
          <RouterProvider router={router}></RouterProvider>
        </ProjectsProvider>
      </MembersProvider>
    </div>
  );
}

export default App;
