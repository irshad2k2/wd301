import "./TaskCard.css";

interface TaskProp {
  title: string;
  description: string;
  dueDate: Date;
  onDelete: () => void;
}

const Task = (props: TaskProp) => {
  return (
    <div className="TaskItem shadow-md border border-slate-100">
      <h2 className="text-base font-bold my-1">{props.title}</h2>
      <p className="text-sm text-slate-500">
        Due Date: {props.dueDate.toString()}
      </p>
      <p className="text-sm text-slate-500">Description: {props.description}</p>

      <button onClick={props.onDelete} className="deleteTaskButton">Delete Task</button>
    </div>
  );
};

export default Task;
