import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import UserProfilePage from "../UserProfilePage/UserProfilePage";
import "./App.css";
import TaskFolder from "../../components/TaskFolder/TaskFolder";
import TaskList from "../../components/TaskList/TaskList";
import NewTaskListForm from "../../components/NewTaskListForm/NewTaskListForm";

export default function App() {
  const [user, setUser] = useState(getUser());
  const [tasks, setTasks] = useState([]);

  function addTaskList(newTask) {
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
              element={<UserProfilePage user={user} setUser={setUser} />}
            />
          </Routes>
          <TaskFolder />
          <TaskList tasks={tasks} />
          <NewTaskListForm addTaskList={addTaskList} />
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
