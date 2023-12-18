const express = require('express');
const router = express.Router();
const { getAllFolders, createFolder, updateFolder, deleteFolder } = require('../controllers/folders');

// GET all folders
router.get('/folders', getAllFolders);

// POST create folder
router.post('/folders', createFolder);

// PUT update folder
router.put('/folders/:folderId', updateFolder);

// DELETE delete folder
router.delete('/folders/:folderId', deleteFolder);

module.exports = router;