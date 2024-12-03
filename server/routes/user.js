const express = require("express");
const router = express.Router();
const {
  getUserDetails,
  getAllUsers,
  banUser,
  changeRole,
} = require("../controllers/User");
const { auth, isModeratorOrAdmin, isAdmin } = require("../middlewares/auth.js");

router.get("/userDetails/:userId", auth, getUserDetails);
router.get("/allUsers", auth, isModeratorOrAdmin, getAllUsers);
router.post("/ban/:userId", auth, isModeratorOrAdmin, banUser);
router.post("/changeRole/:userId", auth, isAdmin, changeRole);

module.exports = router;
