import { useState } from "react";
import { Link } from "react-router-dom";
import TaskList from "../TaskList/TaskList";
// import "./TaskFolder.css";

export default function TaskFolder({ tasks } ) {
  const [folderName, setFolderName] = useState("");
  const [folders, setFolders] = useState([]);
  const [editIdx, setEditIdx] = useState(-1);
  const [editedName, setEditedName] = useState("");

  const handleFolderCreation = () => {
    if (folderName.trim() !== "") {
      setFolders([...folders, folderName]);
      setFolderName("");
    }
  };
  const handleFolderEdit = (idx) => {
    setEditIdx(idx);
    setEditedName(folders[idx]);
  };

  const handleFolderUpdate = () => {
    const updatedFolders = [...folders];
    updatedFolders[editIdx] = editedName;
    setFolders(updatedFolders);
    setEditIdx(-1);
  };

  const handleFolderDelete = (idx) => {
    const updatedFolders = [...folders];
    updatedFolders.splice(idx, 1);
    setFolders(updatedFolders);
  };

  return (
    <>
      <h1> Task Folder </h1>
      <div>
        <input
          type="text"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
          placeholder="Enter folder name here"
        />
        <button onClick={handleFolderCreation}>Create Folder</button>
      </div>

      <div>
        {folders.map((folder, idx) => (
        //   <Link to={`/TaskFolder/${idx}`}>
            <div key={idx} idx={idx} className="folder-card">
              {editIdx === idx ? (
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
              ) : (
                <h3>{folder}</h3>
              )}
              <button onClick={() => handleFolderEdit(idx)}>Edit</button>
              <button onClick={() => handleFolderDelete(idx)}>Delete</button>
              {editIdx === idx && (
                <button onClick={handleFolderUpdate}>Save</button>
              )}
            </div>
        //   </Link>
        ))}
      </div>
      
    </>
  );
}
