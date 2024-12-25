import User from "../models/User.model";

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
