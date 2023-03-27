const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },

    dives: {
      type: [{ type: Schema.Types.ObjectId, ref: "Dive" }],
    },
  },
  { timestamps: true }
);

userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("no such user!");
  }
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("incorrect password");
  }
  return user;
};
userSchema.statics.signup = async function (email, name, password, id, title) {
  if (!email || !password || !name || !id || !title) {
    throw Error("All fields must be filled");
  }

  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("email already in use");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({ email, name, password: hash, id, title });

  return user;
};

module.exports = mongoose.model("User", userSchema);
