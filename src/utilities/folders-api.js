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

export const createFolder = async (folderName) => {
  try {
    const response = await sendRequest(`${BASE_URL}`, "POST", {
      name: folderName,
    });
    console.log(response);
    return response;
  } catch (error) {
    console.error("Error creating folder:", error);
    throw error;
  }
};

export const updateFolder = async (folderId, updatedFolderName) => {
  try {
    const response = await sendRequest(`${BASE_URL}/${folderId}`, "PUT", {
      name: updatedFolderName,
    });
    return response;
  } catch (error) {
    console.error("Error updating folder:", error);
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
