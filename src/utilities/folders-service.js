import * as foldersAPI from "./folders-api";

let folders = [];

export function getAllFolders() {
  foldersAPI.getAllFolders().then((response) => {
    folders = response;
  });
}

export function createFolder(folderName) {
  if (folderName.trim() !== "") {
    folders.push(folderName);
  }
}

export function editFolder(idx) {
  this.editIdx = idx;
  this.editedName = this.folders[idx];
}

export function updateFolder() {
  if (this.editIdx !== -1) {
    this.folders[this.editIdx] = this.editedName;
    this.editIdx = -1;
  }
}

export function deleteFolder(idx) {
  this.folders.splice(idx, 1);
}

export function getFolders() {
  return this.folders;
}

export function getEditIdx() {
  return this.editIdx;
}

export function getEditedName() {
  return this.editedName;
}

export function setEditedName(name) {
  this.editedName = name;
}
