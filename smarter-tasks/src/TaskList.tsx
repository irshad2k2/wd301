import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
  onDeleteTask: (index: number) => void;
}

const TaskList = (props: Props) => {
  return (
    <>
      <ul>
        {props.tasks.map((task, idx) => (
          <li>
            <Task
              key={idx}
              title={task.title}
              description={task.description}
              dueDate={task.dueDate}
              onDelete={() => props.onDeleteTask(idx)}
            ></Task>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
