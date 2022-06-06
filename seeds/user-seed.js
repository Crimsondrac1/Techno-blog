const sequelize = require("../config/connection");
const { User } = require("../models");

const userdata = [
  {
    username: "bugs-bunny",
    email: "bugs@looney.to",
    password: "111111",
  },
  {
    username: "elmer-fudd",
    email: "elmer@looney.to",
    password: "111111",
  },
  {
    username: "daffy-duck",
    email: "daffy@looney.to",
    password: "111111",
  },
  {
    username: "porky-pig",
    email: "porky@looney.to",
    password: "111111",
  },
  {
    username: "tweety-bird",
    email: "tweety@looney.to",
    password: "111111",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
