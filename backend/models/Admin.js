const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

// Define the Person schema
const adminSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});

adminSchema.pre("save", async function (next) {
  const person = this;

  // Hash the password only if it has been modified (or is new)
  if (!person.isModified("password")) return next();

  try {
    // hash password generation
    const salt = await bcrypt.genSalt(10);

    // hash password
    const hashedPassword = await bcrypt.hash(person.password, salt);

    // Override the plain password with the hashed one
    person.password = hashedPassword;
    next();
  } catch (err) {
    return next(err);
  }
});

adminSchema.methods.comparePassword = async function (candidatePassword) {
  try {
    // Use bcrypt to compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(candidatePassword, this.password);
    return isMatch;
  } catch (err) {
    throw err;
  }
};

// Create Person model
const Admin = mongoose.model("Admin", adminSchema);
module.exports = Admin;
