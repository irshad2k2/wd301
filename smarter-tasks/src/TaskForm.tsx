import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
addTask: (task:TaskItem) => void
}

interface TaskFormState {
    title: string;
    description: string;
    dueDate: any;
}

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
    constructor(props: TaskFormProps) {
        super(props);
        this.state = {
            title: '0',
            description: 'des',
            dueDate: "1997-01-01",
        }
    }
    render() {
        return (
            <div>
                <form className="form" onSubmit={this.addTask}>
                    <input placeholder="task" id="todoTitle" type="text" value={this.state.title} onChange={this.titleChanged} required /> <br />
                    <input placeholder="description" type="text" id="todoDescription" value={this.state.description} onChange={this.descriptionChanged} /> <br />
                    <input type="date" id="todoDueDate" value={this.state.dueDate} onChange={this.dueDateChanged} required /> <br />
                    <button type="submit" id="addTaskButton">Add Task</button>
                </form>
            </div>
        )
    }
    addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const newTask = {
            title: this.state.title,
            description: this.state.description,
            dueDate: this.state.dueDate,
        }
        this.props.addTask(newTask);
        this.setState({title: ""});
        console.log(`Submitted the form! with ${this.state.title} and ${this.state.description} and ${this.state.dueDate}`);
    };

    titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        this.setState({title: event.target.value})
    }

    descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        this.setState({description: event.target.value})
    }

    dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        this.setState({dueDate: event.target.value})
    }
}

export default TaskForm;