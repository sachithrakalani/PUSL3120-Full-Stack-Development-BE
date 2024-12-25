import User from "../models/User-model.js";
import bcrypt from "bcryptjs";

export const getAllUsers = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (error) {
    console.log(error);
    {
      return next(error);
    }
  }
  if (!users) {
    return res.status(500).json({ message: "Unexpected Error Occured!" });
  }
  return res.status(200).json({ users });
};

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  if (
    !username ||
    username.trim() === "" ||
    !email ||
    email.trim() === "" ||
    !password ||
    password.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid Inputs" });
  }

  const hashedPassword = bcrypt.hashSync(password);
  let user;
  try {
    user = new User({ username, email, password: hashedPassword });
    user = await user.save();
  } catch (error) {
    console.log(error);
    return next(error);
  }
  if (!user) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
  }
  return res.status(201).json({ user });
};

export const updateUser = async (req, res, next) => {
  const id = req.params.id;
  const { username, email, password } = req.body;
  if (
    !username ||
    username.trim() === "" ||
    !email ||
    email.trim() === "" ||
    !password ||
    password.trim() === ""
  ) {
    return res.status(422).json({ message: "Invalid Inputs" });
  }
  const hashedPassword = bcrypt.hashSync(password);
  let user;
  try {
    user = await User.findByIdAndUpdate(id, {
      username,
      email,
      password: hashedPassword,
    });
  } catch (error) {
    return console.log(error);
  }
  if (!user) {
    return res.status(500).json({ message: "Something Went Worng" });
  }
  res.status(200).json({ message: "Updated Sucessfully" });
};
