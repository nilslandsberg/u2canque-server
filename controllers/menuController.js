const Appetizer = require("../models/appetizerItem");
const Lunch = require("../models/lunchItem");
const Side = require("../models/sideItem");
const Bulk = require("../models/bulkBbqItem");
const HolidayItem = require("../models/holidayItem");
const Modifiers = require("../models/modifiers")


// - APPETIZERS -
// GET all appetizers
exports.getAppetizers = async (req, res) => {
  try {
    const appetizers = await Appetizer.find();
    res.status(200).json(appetizers);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// CREATE a new appetizer
exports.createNewAppetizer = async (req, res) => {
  const newAppetizer = new Appetizer(req.body);
  try {
    const savedAppetizer = await newAppetizer.save();
    res.status(201).json(savedAppetizer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET a single appetizer by ID
exports.getAnAppetizer = async (req, res) => {
  try {
    const appetizer = await Appetizer.findById(req.params.id);
    if (!appetizer) {
      return res.status(404).json({ message: "Appetizer not found" });
    }
    res.status(200).json(appetizer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// EDIT a single appetizer by ID
exports.editAppetizer = async (req, res) => {
  try {
    const updatedAppetizer = await Appetizer.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedAppetizer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE a single appetizer by ID
exports.deleteAppetizer = async (req, res) => {
  try {
    const deletedAppetizer = await Appetizer.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedAppetizer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// - LUNCH -
// GET all lunches
exports.getLunches = async (req, res) => {
  try {
    const lunch = await Lunch.find();
    res.status(200).json(lunch);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET Monday lunches
exports.getMondayLunch = async (req, res) => {
  try {
    const mondayLunch = await Lunch.find({ $or: [{ day: 'Monday' }, { day: 'Every Day' }] });
    res.status(200).json(mondayLunch);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET Tuesday lunches
exports.getTuesdayLunch = async (req, res) => {
  try {
    const tuesdayLunch = await Lunch.find({ $or: [{ day: 'Tuesday' }, { day: 'Every Day' }] });
    res.status(200).json(tuesdayLunch);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET Wednesday lunches
exports.getWednesdayLunch = async (req, res) => {
  try {
    const wednesdayLunch = await Lunch.find({ $or: [{ day: 'Wednesday' }, { day: 'Every Day' }] });
    res.status(200).json(wednesdayLunch);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET Thursday lunches
exports.getThursdayLunch = async (req, res) => {
  try {
    const thursdayLunch = await Lunch.find({ $or: [{ day: 'Thursday' }, { day: 'Every Day' }] });
    res.status(200).json(thursdayLunch);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET Friday lunches
exports.getFridayLunch = async (req, res) => {
  try {
    const fridayLunch = await Lunch.find({ $or: [{ day: 'Friday' }, { day: 'Every Day' }] });
    res.status(200).json(fridayLunch);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// CREATE a new lunch
exports.createNewLunch = async (req, res) => {
  const newLunch = new Lunch(req.body);
  try {
    const savedLunch = await newLunch.save();
    res.status(201).json(savedLunch);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET a single lunch by ID
exports.getALunch = async (req, res) => {
  try {
    const lunch = await Lunch.findById(req.params.id);
    if (!lunch) {
      return res.status(404).json({ message: "Lunch not found" });
    }
    res.status(200).json(lunch);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// EDIT a single lunch by ID
exports.editLunch = async (req, res) => {
  try {
    const updatedLunch = await Lunch.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedLunch);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE a single lunch by ID
exports.deleteLunch = async (req, res) => {
  try {
    const deletedLunch = await Lunch.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedLunch);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// - SIDES -
// GET all side
exports.getSides = async (req, res) => {
  try {
    const sides = await Side.find();
    res.status(200).json(sides);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// CREATE a new side
exports.createNewSide = async (req, res) => {
  const newSide = new Side(req.body);
  try {
    const savedSide = await newSide.save();
    res.status(201).json(savedSide);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET a single side by ID
exports.getASide = async (req, res) => {
  try {
    const side = await Side.findById(req.params.id);
    if (!side) {
      return res.status(404).json({ message: "Side not found" });
    }
    res.status(200).json(side);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// EDIT a single side by ID
exports.editSide = async (req, res) => {
  try {
    const updatedSide = await Side.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedSide);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE a single side by ID
exports.deleteSide = async (req, res) => {
  try {
    const deletedSide = await Side.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedSide);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// - BULK BBQ -
// GET all bulk BBQ items
exports.getBulkBbqItems = async (req, res) => {
  try {
    const bulkBbqs = await Bulk.find();
    res.status(200).json(bulkBbqs);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// CREATE a new bulk BBQ item
exports.createNewBulkBbqItem = async (req, res) => {
  const newBulkBbq = new Bulk(req.body);
  try {
    const savedBulkBbq = await newBulkBbq.save();
    res.status(201).json(savedBulkBbq);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET a single bulk BBQ item by ID
exports.getABulkBbqItem = async (req, res) => {
  try {
    const bulkBbq = await Bulk.findById(req.params.id);
    if (!bulkBbq) {
      return res.status(404).json({ message: "Bulk BBQ Item not found" });
    }
    res.status(200).json(bulkBbq);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// EDIT a single bulk BBQ item by ID
exports.editBulkBbqItem = async (req, res) => {
  try {
    const updatedBulkBbq = await Bulk.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedBulkBbq);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE a single bulk BBQ item by ID
exports.deleteBulkBbqItem = async (req, res) => {
  try {
    const deletedBulkBbq = await Bulk.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedBulkBbq);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// - HOLIDAY ITEMS -
// GET all holiday items
exports.getHolidayItems = async (req, res) => {
  try {
    const holidayItems = await HolidayItem.find();
    res.status(200).json(holidayItems);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// CREATE a new holiday item
exports.createNewHolidayItem = async (req, res) => {
  const newHolidayItem = new HolidayItem(req.body);
  try {
    const savedHolidayItem = await newHolidayItem.save();
    res.status(201).json(savedHolidayItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET a single holiday item by ID
exports.getAHolidayItem = async (req, res) => {
  try {
    const holidayItem = await HolidayItem.findById(req.params.id);
    if (!holidayItem) {
      return res.status(404).json({ message: "Holiday Item not found" });
    }
    res.status(200).json(holidayItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// EDIT a single holiday item by ID
exports.editHolidayItem = async (req, res) => {
  try {
    const updatedHolidayItem = await HolidayItem.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedHolidayItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// DELETE a single holiday item by ID
exports.deleteHolidayItem = async (req, res) => {
  try {
    const deletedHolidayItem = await HolidayItem.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedHolidayItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// - MODIFIERS -
// GET all modifiers (all stored in one entry)
exports.getModifiers = async (req, res) => {
  try {
    const modifiers = await Modifiers.find();
    res.status(200).json(modifiers);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};