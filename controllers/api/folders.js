const Folder = require("../../models/folder");

module.exports = {
  getAllTaskFolders,
  createTaskFolder,
  editFolder,
  deleteFolder,
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

async function editFolder(req, res) {
  try {
    const { name, newName } = req.body;
    const folder = await Folder.findOneAndUpdate({ name }, { name: newName }, { new: true });
    if (!folder) {
      return res.status(404).json({ error: "Folder not found" });
    }
    res.status(200).json(folder);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
}

async function deleteFolder(req, res) {
  try {
    const { name } = req.body;
    const folder = await Folder.findOneAndDelete({ name });
    if (!folder) {
      return res.status(404).json({ error: "Folder not found" });
    }
    res.status(200).json({ message: "Folder deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
}