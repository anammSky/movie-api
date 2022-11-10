const Show = require("./Show");
const User = require("./User");

// Show.belongsTo(User);
// User.hasMany(Show);

Show.belongsToMany(User, { through: "user_shows" });
User.belongsToMany(Show, { through: "user_shows" });

module.exports = { Show, User };
