import { useState, useEffect } from "react";
import * as foldersService from "../../utilities/folders-service";

export default function TaskFolder() {
  const [folderName, setFolderName] = useState([]);
  const [folders, setFolders] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedName, setEditedName] = useState("");

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
    if (folderName.trim() !== "") {
      evt.preventDefault();
      try {
        const newFolder = await foldersService.createFolder(folderName);
        // const updatedFolders = Array.isArray(folders) ? [...folders, newFolder] : [newFolder];
        setFolders([...folders, newFolder]);
        setFolderName("");
      } catch (error) {
        console.error("Error creating folder:", error);
      }
    }
  };

  const handleFolderEdit = (idx) => {
          setEditIndex(idx);
      setEditedName(folders[idx].name);
  };

  const handleFolderDelete = (idx) => {
    setFolders(folders.filter((_, index) => index !== idx));
  };

  const handleFolderUpdate = () => {
    setFolders(
      folders.map((folder, idx) =>
        idx === editIndex ? { ...folder, name: editedName } : folder
      )
    );
    setEditIndex(null);
    setEditedName("");
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
        {folders &&
          folders.map((folder, idx) => (
            <div
              key={`${folder.name} + ${idx}`}
              idx={idx}
              className="folder-card"
            >
              {editIndex === idx ? (
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => setEditedName(e.target.value)}
                />
              ) : (
                <h3>{folder.name}</h3>
              )}
              <button onClick={() => handleFolderEdit(idx)}>Edit</button>
              <button onClick={() => handleFolderDelete(idx)}>Delete</button>
              {editIndex === idx && (
                <button onClick={handleFolderUpdate}>Save</button>
              )}
            </div>
          ))}
      </div>
    </>
  );
}
