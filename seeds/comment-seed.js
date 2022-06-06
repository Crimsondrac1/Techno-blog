const sequelize = require("../config/connection");
const { Comment } = require("../models");

const commentdata = [
  {
    comment_text: "No way this is real!!!",
    user_id: 1,
    post_id: 3,
  },
  {
    comment_text: "Give me two!",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "I'll believe it when I see it!",
    user_id: 1,
    post_id: 3,
  },
  {
    comment_text: "Vaporware bro.",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: "Is it April 1?",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: "Can I get that with bacon?",
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: "Fried brains over easy please...",
    user_id: 3,
    post_id: 4,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
