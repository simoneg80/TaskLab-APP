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

export const editFolder = async (folderName, newFolderName) => {
  try {
    const response = await sendRequest(`${BASE_URL}/${folderName}`, "PUT", {
      name: newFolderName,
    });
console.log(response);
    return response;
  } catch (error) {
    console.error("Error editing folder:", error);
    throw error;
  }
};

export const deleteFolder = async (folderName) => {
  try {
    await sendRequest(`${BASE_URL}/${folderName}`, "DELETE");
  } catch (error) {
    console.error("Error deleting folder:", error);
    throw error;
  }
};
