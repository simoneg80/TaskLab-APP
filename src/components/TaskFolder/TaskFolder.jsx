import React, { useState } from "react";
import * as foldersService from "../../utilities/folders-service";



export default function TaskFolder() {
  const [folderName, setFolderName] = useState([]);
  const folders = foldersService.getFolders();
  const editIdx = foldersService.getEditIdx();
  const editedName = foldersService.getEditedName();


  const handleFolderCreation = async () => {
    if (folderName.trim() !== "") {
      try {
        const newFolder = await foldersService.createFolder(folderName);
        const updatedFolders = Array.isArray(folders) ? [...folders, newFolder] : [newFolder];
        setFolderName(updatedFolders);
      } catch (error) {
        console.error('Error creating folder:', error);
      }
    }
  };

  const handleFolderEdit = (idx) => {
    foldersService.editFolder(idx);
  };

  const handleFolderUpdate = () => {
    foldersService.updateFolder();
  };

  const handleFolderDelete = (idx) => {
    foldersService.deleteFolder(idx);
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
        {folders && folders.map((folder, idx) => (
          <div key={idx} idx={idx} className="folder-card">
            {editIdx === idx ? (
              <input
                type="text"
                value={editedName}
                onChange={(e) => foldersService.setEditedName(e.target.value)}
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
        ))}
      </div>
    </>
  );
}