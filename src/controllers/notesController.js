import { Test } from "../models/Test.js";

export const getNotes = async (req, res) => {
  try {
    const notes = await Test.find();
    res.status(200).json(notes);
  } catch (error) {
    console.error("Error fetching notes:", error);
    res.status(500).json({ message: "Server Error" });
  }
  res.send("Get all notes");
};

export const createNotes = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newNotes = await Test.create({ title, description });
    res.status(201).json({ message: "Notes created successfully" }, newNotes);
  } catch (error) {
    console.error("Error creating notes:", error);
    res.status(500).json({ message: "Server Error" });
  }
  res.send("Get all notes");
};
