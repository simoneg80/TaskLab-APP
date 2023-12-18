import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import UserProfilePage from "../UserProfilePage/UserProfilePage";
import "./App.css";
import TaskFolder from "../../components/TaskFolder/TaskFolder";
import TaskList from "../../components/TaskList/TaskList";
import TaskListItem from "../../components/TaskListItem/TaskListItem";
import NewTaskListForm from "../../components/NewTaskListForm/NewTaskListForm";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [tasks, setTasks] = useState([
    {name: "task1"}, 
    {name: "task2"},
    {name: "task3"}
  ]);


  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route
              path="/profile"
              element={<UserProfilePage user={user} setUser={setUser} />} />
            {/* <Route path="/TaskFolder/:folderId" component={<TaskList />} /> */}
          </Routes>
          <TaskFolder />
          {/* <TaskList  /> */}
          <TaskList tasks={tasks}  />
          <NewTaskListForm addTask={addTask} />
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
