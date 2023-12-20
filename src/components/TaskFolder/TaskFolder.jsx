import { useState, useEffect } from "react";
import * as foldersService from "../../utilities/folders-service";
import "./TaskFolder.css";

export default function TaskFolder() {
  const [folderName, setFolderName] = useState([]);
  const [folders, setFolders] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [folderContent, setFolderContent] = useState("");
  const [editedContent, setEditedContent] = useState("");
  const [folderDueDate, setFolderDueDate] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedFolders = await foldersService.getAllFolders();

        setFolders(fetchedFolders);
      } catch (error) {
        console.error("Error fetching folders:", error);
      }
    };

    fetchData();
  }, []);

  const handleFolderCreation = async (evt) => {
    // if (folderName.trim() !== "") {
    evt.preventDefault();
    try {
      const newFolder = await foldersService.createFolder(
        folderName,
        folderContent,
        folderDueDate
      );
        console.log(newFolder);
      setFolders([...folders, newFolder]);
      setFolderName("");
      setFolderContent("");
      setFolderDueDate("");
    } catch (error) {
      console.error("Error creating folder:", error);
    }
    // }
  };

  const handleFolderDelete = async (idx) => {
    const res = await foldersService.deleteFolder(folders[idx]._id);
    setFolders(folders.filter((_, index) => index !== idx));
  };

  const handleFolderEdit = async (idx) => {
    if (editedName === "") {
      setEditIndex(idx);
      setEditedName(folders[idx].name);
      setFolderContent(folders[idx].content);
    } else {
      await foldersService.editFolder(folders[idx]._id, {
        name: editedName,
        content: editedContent,
      });
      const updatedFolders = await foldersService.getAllFolders();
      setFolders(updatedFolders);

      setEditIndex(null);
      setEditedName("");
    }
  };

  return (
    <>
      <div className="taskfolder">
        <h1 className="taskfoldertitle"> Your Task Folders</h1>
        <input
          type="text"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
          placeholder="Enter folder name here"
        />
        <input
          value={folderContent}
          onChange={(e) => setFolderContent(e.target.value)}
          placeholder="Enter folder content here"
        />
        <input
          type="date"
          value={folderDueDate}
          onChange={(e) => setFolderDueDate(e.target.value)}
        />

        <button className="newfolderbutton" onClick={handleFolderCreation}>
          + folder
        </button>
      </div>

      <div>
        {folders &&
          folders.map((folder, idx) => (
            <div
              key={`${folder.name} + ${idx}`}
              idx={idx}
              className="folder-card"
            >
              {editIndex === idx ? (
                <>
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                  <input
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                    placeholder=""
                  />
                </>
              ) : (
                <>
                  <h3>{folder.name}</h3>
                  <p>{folder.content}</p>
                  <p>{folder.dueDate}</p>
                </>
              )}
              {editIndex === idx ? (
                <button onClick={() => handleFolderEdit(idx)}>Save</button>
              ) : (
                <button onClick={() => handleFolderEdit(idx)}>Edit</button>
              )}
              <button onClick={() => handleFolderDelete(idx)}>Delete</button>
            </div>
          ))}
      </div>
    </>
  );
}
