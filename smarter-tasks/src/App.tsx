import './App.css'
import TaskApp from './TaskApp'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import TaskListPage from './pages/TaskListPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage></HomePage>
  },
  {
    path: "/tasks",
    element: <TaskListPage></TaskListPage>
  }
])

function App() {
  return(
    <div className='APP'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  )
}

export default App
