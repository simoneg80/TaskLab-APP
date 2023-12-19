const TaskFolder = require("../../models/folder");

module.exports = {
  getAllTaskFolders,
  createTaskFolder,
  updateTaskFolder,
  deleteTaskFolder,
};

async function getAllTaskFolders(req, res) {
  try {
    const taskFolders = await TaskFolder.find().populate("user");
    res.json(taskFolders);
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
}

async function createTaskFolder(req, res) {
  try {
    const { name } = req.body;
    const folder = await TaskFolder.create({ ...req.body, name: name , user: req.user._id });
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
    const updatedTaskFolder = await TaskFolder.findByIdAndUpdate(
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
    await TaskFolder.findByIdAndDelete(folderId);
    res.sendStatus(204);
  } catch (err) {
    res.status(400).json({ error: "Bad request" });
  }
}
