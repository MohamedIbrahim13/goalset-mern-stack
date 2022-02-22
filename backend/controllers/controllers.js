const Goal = require("../models/Goal");
const User = require("../models/User");

const getAll = async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
};

const setOne = async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text!");
  }
  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(goal);
};

const putOne = async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if (!goal) {
    res.status(400);
    throw new Error("Nothing Found!");
  }
  if (!req.user) {
    res.status(401);
    throw new Error("User not found!");
  }
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("NUser not authorized!");
  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedGoal);
};

const removeOne = async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("Nothing Found!");
  }
  if (!req.user) {
    res.status(401);
    throw new Error("User not found!");
  }
  if (goal.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("NUser not authorized!");
  }
  await goal.remove();
  res.status(200).json({ id: req.params.id });
};

module.exports = {
  getAll,
  setOne,
  putOne,
  removeOne,
};
