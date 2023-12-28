import TaskCard from "./TaskCard"

const App = () => {

  return (
    
    <div className="flex flex-row mx-40">
      <div className="basis-1/2 mx-5 my-5 p-2 border-4 border-slate-300 rounded-3xl">
        <h1 className="text-center text-2xl text-slate-500">Pending</h1>
        <TaskCard title="Build the website with static content" dueDate="10th April" assigneeName="Rohit S"></TaskCard>
        <TaskCard title="Add s blog" dueDate="22nd March" assigneeName="Rohit M"></TaskCard>
      </div>
      <br />
      <div className="basis-1/2 mx-5 my-5 p-2 border-4 border-slate-300 rounded-3xl">
        <h1 className="text-center text-2xl text-slate-500">Done</h1>
        <TaskCard title="Design the mockup" completedAtDate="10th April" assigneeName="Rohit M"></TaskCard>
        <TaskCard title="Get the approval from principal" completedAtDate="20th April" assigneeName="Ajay S"></TaskCard>
      </div>

    </div>

  
  );
}


export default App;