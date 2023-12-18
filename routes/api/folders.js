const express = require("express");
const router = express.Router();
const foldersCtrl = require("../../controllers/api/folders");

// GET all folders
router.get("/folders", foldersCtrl.getAllTaskFolders);

// POST create folder
router.post("/folders", foldersCtrl.createTaskFolder);

// PUT update folder
router.put("/folders/:folderId", foldersCtrl.updateTaskFolder);

// DELETE delete folder
router.delete("/folders/:folderId", foldersCtrl.deleteTaskFolder);

module.exports = router;
