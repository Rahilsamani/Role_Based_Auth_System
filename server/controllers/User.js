const User = require("../models/User");

const getUserDetails = async (req, res) => {
  try {
    const { userId } = req.params;

    const userExists = await User.findById(userId);

    if (!userExists) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User Details Fetched Successfully",
      user: userExists,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching user details",
      error: error.message,
    });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();

    if (users.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No users found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Users fetched successfully",
      users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching all users",
      error: error.message,
    });
  }
};

module.exports = { getUserDetails, getAllUsers };
