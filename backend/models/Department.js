const mongoose = require("mongoose");

const DepartmentSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("Department", DepartmentSchema);
