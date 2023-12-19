const express = require("express");
const router = express.Router();
const foldersCtrl = require("../../controllers/api/folders");

// GET all folders
router.get("/", foldersCtrl.getAllTaskFolders);

// POST create folder
router.post("/", foldersCtrl.createTaskFolder);

// PUT update folder
router.put("/:folderId", foldersCtrl.updateTaskFolder);

// DELETE delete folder
router.delete("/:folderId", foldersCtrl.deleteTaskFolder);

module.exports = router;
