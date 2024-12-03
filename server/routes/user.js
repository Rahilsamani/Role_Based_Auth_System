const express = require("express");
const router = express.Router();
const { getUserDetails, getAllUsers } = require("../controllers/User");
const { auth, isModeratorOrAdmin } = require("../middlewares/auth.js");

router.get("/userDetails/:userId", auth, getUserDetails);
router.get("/allUsers", auth, isModeratorOrAdmin, getAllUsers);

module.exports = router;
