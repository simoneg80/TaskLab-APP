const Folder = require("../../models/folder");

module.exports = {
  getAllTaskFolders,
  createTaskFolder,
  updateTaskFolder,
  deleteTaskFolder,
};

async function getAllTaskFolders(req, res) {
  try {
    const taskFolders = await Folder.find({user: req.user._id}).populate("user").exec();
    res.json(taskFolders);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function createTaskFolder(req, res) {
  try {
    const { name } = req.body;
    const folder = await Folder.create({ ...req.body, name: name , user: req.user._id });
    console.log(folder)
    res.status(201).json(folder);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
    console.log(req.user._id)
  }
}

async function updateTaskFolder(req, res) {
  try {
    const { folderId } = req.params;
    const { name } = req.body;
    const updatedTaskFolder = await Folder.findByIdAndUpdate(
      folderId,
      { name },
      { new: true }
    );
    res.json(updatedTaskFolder);
  } catch (err) {
    res.status(400).json({ error: "Bad request" });
  }
}

async function deleteTaskFolder(req, res) {
  try {
    const { folderId } = req.params;
    await Folder.findByIdAndDelete(folderId);
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ error: "Bad request" });
  }
}
