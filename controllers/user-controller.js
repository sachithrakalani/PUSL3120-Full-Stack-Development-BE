import User from "../models/User-model.js";

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
  let user;
  try {
    user = new User({ username, email, password });
    user = user.save();
  } catch (error) {
    console.log(error);
    return next(error);
  }
  if (!user) {
    return res.status(500).json({ message: "Unexpected Error Occured" });
  }
  return res.status(201).json({ user });
};
