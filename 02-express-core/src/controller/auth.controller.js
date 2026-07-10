const getAllUsers = (req, res) => {
  const users = [
    {
      id: 1,
      name: "Raj",
    },
    {
      id: 2,
      name: "John",
    },
  ];
  res.json(users);
  res.send("Hello world");
};

const getUserById = (req, res) => {
  const { id } = req.params;
  res.json({ userId: id });
};

module.exports = { getAllUsers, getUserById };
