import sendRequest from "./send-request";
const BASE_URL = "/api/folders";



export const getAllFolders = async () => {
  try {
    const response = await sendRequest.get(`${BASE_URL}/folders`);
    return response.data;
  } catch (error) {
    console.error("Error fetching folders:", error);
    throw error;
  }
};

export const createFolder = async (folderName) => {
  try {
    const response = await sendRequest.post(`${BASE_URL}/folders`, { name: folderName });
    return response.data;
  } catch (error) {
    console.error("Error creating folder:", error);
    throw error;
  }
};

export const updateFolder = async (folderId, updatedFolderName) => {
  try {
    const response = await sendRequest.put(`${BASE_URL}/folders/${folderId}`, { name: updatedFolderName });
    return response.data;
  } catch (error) {
    console.error("Error updating folder:", error);
    throw error;
  }
};

export const deleteFolder = async (folderId) => {
  try {
    await sendRequest.delete(`${BASE_URL}/folders/${folderId}`);
  } catch (error) {
    console.error("Error deleting folder:", error);
    throw error;
  }
};