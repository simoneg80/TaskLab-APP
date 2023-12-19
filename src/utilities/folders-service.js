import { response } from "express";
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

export async function editFolder(folderId, newFolderName) {
  try {
    const response = await foldersAPI.editFolder(folderId, newFolderName);
    return response;
  } catch (error) {
    console.error("Error editing folder:", error);
  }
}

export async function deleteFolder(folderId) {
  try {
    const response = await foldersAPI.deleteFolder(folderId);
    console.log(response);
  } catch (error) {
    console.error("Error deleting folder:", error);
}
}