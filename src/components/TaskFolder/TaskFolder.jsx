import { useState, useEffect } from "react";

import * as foldersService from "../../utilities/folders-service";
import "./TaskFolder.css";

export default function TaskFolder({ user, setUser }) {
  const [folderName, setFolderName] = useState([]);
  const [folders, setFolders] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [folderContent, setFolderContent] = useState("");
  const [editedContent, setEditedContent] = useState("");
  const [folderDueDate, setFolderDueDate] = useState("");
  const [editedFolderDate, setEditedFolderDate] = useState("");
  const [colorPicker, setColorPicker] = useState("#81B29A");

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
      setEditedContent(folders[idx].content);
      setEditedFolderDate(folders[idx].dueDate);
      setColorPicker(folders[idx].color);
    } else {
      await foldersService.editFolder(folders[idx]._id, {
        name: editedName,
        content: editedContent,
        dueDate: editedFolderDate,
        color: colorPicker,
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
        <h1 className="taskfoldertitle"> Your Tasks</h1>
        <p className="welcomeusermsg">Hi {user.name}, create your task here!</p>
        <div className="welcome">
        &nbsp;&nbsp;
        &nbsp;&nbsp;{" "}
        </div>

        <input
          id="inputtaskfolder"
          type="text"
          value={folderName}
          onChange={(e) => setFolderName(e.target.value)}
          placeholder="Enter folder name here"
        />
        <input
          id="inputtaskfolder"
          value={folderContent}
          onChange={(e) => setFolderContent(e.target.value)}
          placeholder="Enter task(s) here"
        />
        <input
          id="inputtaskfolder"
          type="date"
          value={folderDueDate}
          onChange={(e) => setFolderDueDate(e.target.value)}
        />
        <button className="newfolderbutton" onClick={handleFolderCreation}>
          +Task
        </button>
      </div>

      <div className="folder-container">
        {folders &&
          folders.map((folder, idx) => (
            <div
              key={`${folder.name} + ${idx}`}
              idx={idx}
              className="folder-card"
              style={{ backgroundColor: folder.color }}
            >
              {editIndex === idx ? (
                <div className="edittask">
                  <input className="field1"
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                  <input className="field2"
                    type="text"
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                  />
                  <input className="field3"
                    type="date"
                    value={editedFolderDate}
                    onChange={(e) => setEditedFolderDate(e.target.value)}
                  />
                  <select
                    className="color-picker"
                    value={colorPicker}
                    onChange={(e) => setColorPicker(e.target.value)}
                  >
                    <option value="#FFF9B1">Peacefull Yellow</option>
                    <option value="#ffc000">Hungry Yellow</option>
                    <option value="#E07A5F">Terracota</option>
                    <option value="#daf7a1">Breeze Green</option>
                    <option value="#C9DF56">Tree Green</option>
                    <option value="#b6d7a8">Darker Green</option>
                    <option value="#81B29A">Sage Green</option>
                    <option value="#ff0000">Salmon</option>
                    <option value="#eca2c4">Barbie</option>
                    <option value="#FFCEE0">Also Barbie</option>
                    <option value="#b485bc">Purple</option>
                    <option value="#3D405B">Deep Purple</option>
                    <option value="#b1d3f6">Sky Blue</option>
                    <option value="#8ca0ff">Lavander</option>
                  </select>
                </div>
              ) : (
                <>
                  <h3>{folder.name}</h3>
                  <p>{folder.content}</p>
                  <p>{folder.dueDate}</p>
                </>
              )}
              {editIndex === idx ? (
                <button className="taskcardsave" onClick={() => handleFolderEdit(idx)}>Save</button>
              ) : (
                <button className="taskcarded" onClick={() => handleFolderEdit(idx)}>Edit</button>
              )}
              <button className="taskcarddel" onClick={() => handleFolderDelete(idx)}>Delete</button>
            </div>
          ))}
      </div>
    </>
  );
}
