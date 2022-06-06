const sequelize = require("../config/connection");
const { Post } = require("../models");

const postdata = [
  {
    title: "New all cheese cheesburger released!",
    description:
      "Wendys has announced an all new all-cheese cheeburger is comming. No meat or veggies to get in the way and the buns are cheese too!",
    user_id: 1,
    url: "https://news.google.com",
  },
  {
    title: "Augmented reality chips can now be installed to human brains.",
    description:
      "AR-Inno has announced a new wet-ware chip available that can connect directly to the brainstem allowing full augmented reality assistance in your everyday lives.",
    user_id: 2,
    url: "https://news.google.com",
  },
  {
    title: "Hoverboards are coming!",
    description:
      "Gravitoys International announces skateboard and roller skates are comming that no longer require wheels. Utilizing a gravi-magneto induction coil that interacts with magnetic fields to keep you afloat.",
    user_id: 3,
    url: "https://news.google.com",
  },
  {
    title: "Knowledge imprinting tech is here!",
    description:
      "Ever wanted to learn how to play the piano in a day or paint like a master? Now you can with Mind Academy. Now directly imprint the engrams for all kinds of skills and knowledge directly into your brain",
    user_id: 3,
    url: "https://news.google.com",
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
