const seedUsers = require("./user-seed");
const seedPosts = require("./post-seed");
const seedComments = require("./comment-seed");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n>>>>> DATABASE SYNCED <<<<<\n");
  await seedUsers();
  console.log("\n>>>>> Users SEEDED <<<<<\n");

  await seedPosts();
  console.log("\n>>>>> Posts SEEDED <<<<<\n");

  await seedComments();
  console.log("\n>>>>> Comments SEEDED <<<<<\n");

  process.exit(0);
};

seedAll();
