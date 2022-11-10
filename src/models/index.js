const Show = require("./Show");
const User = require("./User");
const Watch_Info = require("./Watch_Info");
// Show.belongsTo(User);
// User.hasMany(Show);

Show.belongsToMany(User, { through: "Watch_Info" });
User.belongsToMany(Show, { through: "Watch_Info" });

// The Super Many-to-Many relationship
User.hasMany(Watch_Info);
Watch_Info.belongsTo(User);

Show.hasMany(Watch_Info);
Watch_Info.belongsTo(Show);

module.exports = { Show, User, Watch_Info };
