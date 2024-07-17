import React, { Suspense } from "react";
const ProjectDetails = React.lazy(() => import("./ProjectDetails"));
import { TasksProvider } from "../../context/task/context";
import { CommentProvider } from "../../context/comment/context";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProjectDetailsIndex: React.FC = () => {
  const { t } = useTranslation();
  return (
    <TasksProvider>
      <CommentProvider>
          <Suspense
          fallback={<div className="suspense-loading">{t("loading")}</div>}
          >
            <ProjectDetails />
          </Suspense>
        <Outlet />
      </CommentProvider>
    </TasksProvider>
  );
};

export default ProjectDetailsIndex;
