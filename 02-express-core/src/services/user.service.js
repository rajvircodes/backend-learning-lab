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

const fetchAllUsers = () => {
  return users;
};

const fetchUserById = (id) => {
  return users.find((user) => user.id === Number(id));
};

const searchUserByName = (name) => {
  if (!name) return users;

  return users.filter((user) =>
    user.name.toLowerCase().includes(name.toLowerCase()),
  );
};

module.exports = { fetchAllUsers, fetchUserById, searchUserByName };
