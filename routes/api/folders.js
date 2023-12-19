const express = require("express");
const router = express.Router();
const foldersCtrl = require("../../controllers/api/folders");


router.get("/", foldersCtrl.getAllTaskFolders);
router.post("/", foldersCtrl.createTaskFolder);
router.put('/:id', foldersCtrl.editFolder);
router.delete('/:id', foldersCtrl.deleteFolder);

module.exports = router;
