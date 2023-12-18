import * as tasksAPI from "./tasks-api";

class TaskService {
  constructor() {
    this.folders = [];
    this.editIdx = -1;
    this.editedName = "";
  }

  createFolder(folderName) {
    if (folderName.trim() !== "") {
      this.folders.push(folderName);
    }
  }

  editFolder(idx) {
    this.editIdx = idx;
    this.editedName = this.folders[idx];
  }

  updateFolder() {
    if (this.editIdx !== -1) {
      this.folders[this.editIdx] = this.editedName;
      this.editIdx = -1;
    }
  }

  deleteFolder(idx) {
    this.folders.splice(idx, 1);
  }

  getFolders() {
    return this.folders;
  }

  getEditIdx() {
    return this.editIdx;
  }

  getEditedName() {
    return this.editedName;
  }

  setEditedName(name) {
    this.editedName = name;
  }
}

export default TaskService;
