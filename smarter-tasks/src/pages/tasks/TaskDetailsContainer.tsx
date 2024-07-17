import { useProjectsState } from "../../context/projects/context";
import { useTasksState } from "../../context/task/context";
import TaskDetails from "./TaskDetails";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const TaskDetailsContainer = () => {
  const { t } = useTranslation();
  let { taskID } = useParams();
  const projectState = useProjectsState();
  const taskListState = useTasksState();
  const isFetchingTasks = taskListState.isLoading;
  const selectedTask = taskListState.projectData.tasks?.[taskID || ""];
  if (isFetchingTasks || !projectState || projectState?.isLoading) {
    return <>Loading...</>;
  }
  if (!selectedTask) {
    return <>{t("noTask")}</>;
  }

  return <TaskDetails />;
};

export default TaskDetailsContainer;
