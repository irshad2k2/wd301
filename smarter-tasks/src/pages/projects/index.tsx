import React, { Suspense } from "react";
import NewProject from "./NewProject";
const ProjectList = React.lazy(() => import("./ProjectList"));
// import ErrorBoundary from "../../components/ErrorBoundary";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium tracking-tight text-slate-700">
          {t("projects")}
        </h2>
        <NewProject />
      </div>
      {/* <ErrorBoundary> */}
        <Suspense
          fallback={<div className="suspense-loading">{t("loading")}</div>}
        >
          <ProjectList />
        </Suspense>
      {/* </ErrorBoundary> */}
    </>
  );
};

export default Projects;
