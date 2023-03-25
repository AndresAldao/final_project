const { User,Order } = require("../db");

const createUser = async (
  name,
  lastName,
  email,
  password,
  dni,
  phone,
  birthDate,
  country,
  isAdmin
) => {
  const user = await User.create({
    name,
    lastName,
    email,
    password,
    dni,
    phone,
    birthDate,
    country,
    isAdmin
  });

  return "User created";
};

const getAllUser = async () => {
  try {
    const users = await User.findAll({
      include:{
        model:Order
      }
    });
    return users;
  } catch (error) {
    return ({error:error.message})
  }

};

const updateUser = async (id, name, lastName, phone, birthDate, country) => {
  const user = await User.findByPk(id);
  if (!user) {
    throw new Error(`user id not found ${id}`);
  }
  await user.set({
    name,
    lastName,
    phone,
    birthDate,
    country,
  }); //lo actualiza
  await user.save(); //lo guarda

  return user;
};

module.exports = {
  createUser,
  getAllUser,
  updateUser,
};
