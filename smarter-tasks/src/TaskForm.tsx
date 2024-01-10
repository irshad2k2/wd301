import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
addTask: (task:TaskItem) => void
}

interface TaskFormState {
    title: string;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
    constructor(props: TaskFormProps) {
        super(props);
        this.state = {
            title: '0'
        }
    }
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.addTask}>
                    <input placeholder="task" type="text" value={this.state.title} onChange={this.titleChanged} />
                    <button type="submit">Add Task</button>
                </form>
            </div>
        )
    }
    addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const newTask = {
            title: this.state.title,
        }
        this.props.addTask(newTask);
        this.setState({title: ""});
        // console.log(`Submitted the form! with ${this.inputRef.current?.value}`);
        console.log(`Submitted the form! with ${this.state.title} `);
    };
    titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        this.setState({title: event.target.value})
    }

    // inputRef = React.createRef<HTMLInputElement>();
}

export default TaskForm;