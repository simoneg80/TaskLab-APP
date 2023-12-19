import * as foldersAPI from "./folders-api";

let folders = [];

export async function getAllFolders() {
  try {
    const response = await foldersAPI.getAllFolders();
    return folders = response;
  } catch (error) {
    console.error("Error getting folders:", error);
    return [];
  }
}

// export function getAllFolders() {
//   foldersAPI.getAllFolders().then((response) => {
//     folders = response;
//   });
// }

export async function createFolder(folderName) {
  if (folderName.trim() !== "") {
    try {
      await foldersAPI.createFolder(folderName);
      folders.push(folderName);
      console.log(folderName);
      return folderName;
    } catch (error) {
      console.error("Error creating folder:", error);
    }
  }
}

// export function editFolder(idx) {
//   this.editIdx = idx;
//   this.editedName = this.folders[idx];
// }

export async function editFolder(idx, newName, folder) {
  let folders = await getAllFolders();
  if (Array.isArray(folders) && folders.length > idx) {
    folders = newName;
    // Perform any additional folder editing logic here
    // ...
    return folder[idx];
  } else {
    throw new Error("Invalid folder index");
  }
}

export async function updateFolder() {
  if (this.editIdx !== -1) {
    if (Array.isArray(this.folders) && this.folders.length > this.editIdx) {
      this.folders[this.editIdx] = this.editedName;
      this.editIdx = -1;
    } else {
      throw new Error("Invalid folder index");
    }
  }
}

// export function deleteFolder(idx) {
//   this.folders.splice(idx, 1);
// }

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
