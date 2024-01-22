import { Link } from "react-router-dom";
import "./TaskCard.css";

interface TaskProp {
  id: any;
  title: string;
  description: string;
  dueDate: string;
  onDelete: () => void;
}

const Task = (props: TaskProp) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <Link to={`/tasks/${props.id}`}>
        <h2 className="text-base font-bold my-1">{props.title}</h2>
      </Link>{" "}
      <p className="text-sm text-slate-500">
        Due Date: {props.dueDate.toString()}
      </p>
      <p className="text-sm text-slate-500">Description: {props.description}</p>
      <button onClick={props.onDelete} className="deleteTaskButton">
        Delete Task
      </button>
    </div>
  );
};

export default Task;
