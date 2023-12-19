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

export function getFolders() {
  return this.folders;
}

export async function editFolder(oldFolderName, newFolderName) {
  try {
    const response = await foldersAPI.editFolder(oldFolderName, newFolderName);
    const index = folders.findIndex(folder => folder.name === oldFolderName);
    if (index !== -1) {
      folders[index] = response;
    }
    return response;
  } catch (error) {
    console.error("Error editing folder:", error);
  }
}

export async function deleteFolder(folderName) {
  try {
    await foldersAPI.deleteFolder(folderName);
    folders = folders.filter(folder => folder.name !== folderName);
  } catch (error) {
    console.error("Error deleting folder:", error);
}
}