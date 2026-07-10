const authService = require("../services/user.service");

const getAllUsers = (req, res) => {
  const { name } = req.query;

  if (name) {
    const filteredUsers = authService.searchUserByName(name);
    return res.json(filteredUsers);
  }

  const users = authService.fetchAllUsers();
  return res.json(users);
};

const getUserById = (req, res) => {
  const { id } = req.params;
  const user = authService.fetchUserById(id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  return res.json(user);
};

module.exports = { getAllUsers, getUserById };
