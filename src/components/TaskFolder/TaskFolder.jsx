import { useState, useEffect } from "react";
import * as foldersService from "../../utilities/folders-service";

export default function TaskFolder() {
  const [folderName, setFolderName] = useState([]);
  const [folders, setFolders] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [editedName, setEditedName] = useState("");

  // useEffect(() => {
  //   const storedFolders = localStorage.getItem("folders");
  //   if (storedFolders) {
  //     setFolders(JSON.parse(storedFolders));
  //   } else {
  //     fetchData();
  //   }
  // }, []);

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

  // const fetchData = async () => {
  //   try {
  //     const fetchedFolders = await foldersService.getAllFolders();
  //     setFolders(fetchedFolders);
  //     localStorage.setItem("folders", JSON.stringify(fetchedFolders));
  //   } catch (error) {
  //     console.error("Error fetching folders:", error);
  //   }
  // };

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

  // const handleFolderEdit = async (idx) => {
  //   try {
  //     const updatedfolder = await foldersService.editFolder(idx);
  //     setEditIndex(idx);
  //     setEditedName(updatedfolder);
  //   } catch (error) {
  //     console.error("Error editing folder:", error);
  //   }
  // };

  const handleFolderEdit = async (idx) => {
    if (Array.isArray(folders) && folders.length > idx) {
      try {
        const updatedFolder = await foldersService.editFolder(idx);
        setEditIndex(idx);
        setEditedName(folders[idx]);
      } catch (error) {
        console.error("Error editing folder:", error);
      }
    }
  };

  const handleFolderUpdate = async () => {
    try {
      await foldersService.updateFolder();
      const updatedFolders = [...folders];
      updatedFolders[editIndex] = editedName;
      setFolders(updatedFolders);
      setEditIndex(-1);
    } catch (error) {
      console.error("Error updating folder:", error);
    }
  };

  // const handleFolderDelete = (idx) => {
  //   foldersService.deleteFolder(idx);
  // };

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
            <div key={`${folder} + ${idx}`} idx={idx} className="folder-card">
              {editIndex === idx ? (
                <input
                  type="text"
                  value={editedName}
                  onChange={(e) => foldersService.setEditedName(e.target.value)}
                />
              ) : (
                <h3>{folder.name}</h3>
              )}
              <button onClick={() => handleFolderEdit(idx)}>Edit</button>
              {/* <button onClick={() => handleFolderDelete(idx)}>Delete</button> */}
              {editIndex === idx && (
                <button onClick={handleFolderUpdate}>Save</button>
              )}
            </div>
          ))}
      </div>
    </>
  );
}
