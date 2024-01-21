import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
  id: any;
  title: string;
  description: string;
  dueDate: string;
}

const TaskForm = (props: TaskFormProps) => {
  const [formState, setFormState] = React.useState<TaskFormState>({
    id: "",
    title: "",
    description: "",
    dueDate: "",
  });

  const titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setFormState({ ...formState, title: event.target.value });
  };

  const descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setFormState({ ...formState, description: event.target.value });
  };

  const dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setFormState({ ...formState, dueDate: event.target.value });
  };

  const addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    console.log(`Submitted the form with`);
    if (formState.title.length === 0 || formState.dueDate.length === 0) {
      return;
    }
    props.addTask(formState);
    setFormState({id: "", title: "", description: "", dueDate: "" });
  };

  return (
    <>
      <form onSubmit={addTask}>
        <label htmlFor="todoTitle">Title: </label>
        <input
          id="todoTitle"
          type="text"
          value={formState.title}
          onChange={titleChanged}
          required
        />
        <br />
        <br />
        <label htmlFor="todoDescription">Description: </label>
        <input
          type="text"
          id="todoDescription"
          value={formState.description}
          onChange={descriptionChanged}
        />
        <br />
        <br />
        <label htmlFor="todoDueDate">Due Date: </label>
        <input
          type="date"
          id="todoDueDate"
          value={formState.dueDate}
          onChange={dueDateChanged}
          required
        />
        <br />
        <br />
        <button id="addTaskButton" type="submit">
          Add Task
        </button>
      </form>
    </>
  );
};

export default TaskForm;
