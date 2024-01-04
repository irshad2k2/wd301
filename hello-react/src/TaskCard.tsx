import React from 'react'
import './TaskCard.css'

interface TaskCardProps {
  title: string;
  dueDate?: string;
  completedAtDate?: string;
  assigneeName: string;
}

const TaskCard:  React.FC<TaskCardProps> = (props) => {
    return (
      <div className='TaskItem my-5 mx-5'>
        <h1 className="text-xl font-bold ">{props.title}</h1>
        {props.dueDate && <p>Due on: {props.dueDate}</p>}
        {props.completedAtDate && <p>Completed on: {props.completedAtDate}</p>}
        <p>Assignee: {props.assigneeName}</p>
      </div>
    )
}

export default TaskCard