import sendRequest from "./send-request";
const BASE_URL = "/api/folders";

export const getAllFolders = async () => {
  try {
    const response = await sendRequest(`${BASE_URL}`, "GET");
    return response;
  } catch (error) {
    console.error("Error fetching folders:", error);
  }
};

export const createFolder = async (folderName, folderContent, folderDueDate) => {
  try {
    const response = await sendRequest(`${BASE_URL}`, "POST", {
      name: folderName,
      content: folderContent,
      dueDate: folderDueDate,
    });
    return response;
  } catch (error) {
    console.error("Error creating folder:", error);
    throw error;
  }
};

export const editFolder = async ( folderId, newFolder ) => {
  console.log("req:", folderId, newFolder);
  try {
    const response = await sendRequest(`${BASE_URL}/${folderId}`, "PUT", newFolder);
    return response;
  } catch (error) {
    console.error("Error editing folder:", error);
    throw error;
  }
};

export const deleteFolder = async (folderId) => {
  try {
    await sendRequest(`${BASE_URL}/${folderId}`, "DELETE");
  } catch (error) {
    console.error("Error deleting folder:", error);
    throw error;
  }
};
