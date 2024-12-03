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

const banUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    await User.updateOne({ _id: userId }, { isBan: true });

    return res.status(202).json({
      success: true,
      message: "User Banned Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong while banning the users",
      error: error.message,
    });
  }
};

const changeRole = async (req, res) => {
  try {
    const userId = req.params.userId;
    const { role } = req.body;

    if (!role) {
      return res.status(400).json({
        success: false,
        message: "Role is required",
      });
    }

    await User.updateOne({ _id: userId }, { role });

    return res.status(202).json({
      success: true,
      message: "User role changed successfully",
    });
  } catch (error) {
    console.error("Error in changeRole:", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while changing role",
      error: error.message,
    });
  }
};

module.exports = { getUserDetails, getAllUsers, banUser, changeRole };
