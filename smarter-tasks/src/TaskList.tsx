import React from "react";
import Task from "./Task";
import { TaskItem } from "./types";

interface Props {
  tasks: TaskItem[];
}

interface State {
}

class TaskList extends React.Component<Props, State> {
  // constructor(props: Props) {
  //   super(props);
  //   this.state = {
  //     tasks: [],
  //   };
  // }
  // componentDidMount(): void {
  //   const tasks = [
  //     { title: "wash clothes" },
  //     { title: "buy choclates" },
  //     { title: "shift house" },
  //   ];
  //   this.setState((state, props) => ({ tasks }));
  // }

  render() {
    return (
      <>
        {this.props.tasks.map((task, idx) => (
          <Task key={idx} title={task.title}></Task>
        ))}
      </>
    );
  }
}

export default TaskList;
