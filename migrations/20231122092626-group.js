var mongoose = require("mongoose");
const nameList = [
  "Cyberpunk",
  "Messi",
  "Ronaldo",
  "Mpappe",
  "Neymar",
  "Minimalist",
  "12 Zodiacs",
  "Couple",
  "Astronaut",
  "Unique",
  "Japan Vibe",
];
const seedGroup = nameList.map((x, id) => {
  return { _id: id + "", name: x };
});
module.exports = {
  async up(db, client) {
    // TODO write your migration here.
    // See https://github.com/seppevs/migrate-mongo/#creating-a-new-migration-script
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: true}});
    await db.createCollection("groups");
    await db.collection("groups").insertMany(seedGroup);
  },

  async down(db, client) {
    await db.collection("groups").drop();
    // TODO write the statements to rollback your migration (if possible)
    // Example:
    // await db.collection('albums').updateOne({artist: 'The Beatles'}, {$set: {blacklisted: false}});
  },
};
