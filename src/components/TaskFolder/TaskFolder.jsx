// import TaskList from "./TaskList";
import { useState } from "react";

export default function TaskFolder() {
    const [folderName, setFolderName] = useState("");
    const [folders, setFolders] = useState([]);

    const handleFolderCreation = () => {
        if(folderName.trim() !== "") {
            setFolders([...folders, folderName]);
            setFolderName("");
        

        }
    }
  return (
    <>
    <h1> Task Folder </h1>
    <div>
        <input type="text"
        value={folderName}
        onChange={(e) => setFolderName(e.target.value)}
        placeholder="Enter folder name here" 
        />
        <button onClick={handleFolderCreation}>Create Folder</button>
    </div>

    <div>
        {folders.map((folder, idx) => (
            <div key={idx} className="folder-card">
            <h3>{folder}</h3>
            {folder.name}
            </div>
        ))}
    </div>
    </>
  );
}

//   <ul>{skillListItems}</ul>;