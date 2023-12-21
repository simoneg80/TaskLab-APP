import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import UserProfilePage from "../UserProfilePage/UserProfilePage";
import "./App.css";
import TaskFolder from "../../components/TaskFolder/TaskFolder";
import FullCalendarPage from "../FullCalenderPage/FullCalenderPage";
import * as foldersService from "../../utilities/folders-service";


export default function App() {
  const [user, setUser] = useState(getUser());
  const [folders, setFolders] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
        try {
          const allFolders = await foldersService.getAllFolders();
          setFolders(allFolders);
        } catch (error) {
          console.error("Error fetching folders:", error);
        }
      };
      fetchData();
    }, []);
  
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
             <Route
              path="/TaskFolder"
              element={<TaskFolder user={user} setUser={setUser} />}
            />
            <Route
              path="/CalendarPage"
              element={<FullCalendarPage folders={folders} />}
            />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
