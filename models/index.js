const Location = require('./Location');
const Traveller = require('./Traveller');
const Trip = require('./Trip');

// Associations
Location.belongsToMany(Traveller, {
    through: {
        model: Trip,
        unique: false,
    },

});

Traveller.belongsToMany(Location, {
    through: {
        model: Trip,
        unique: false,
    },

});

Traveller.hasMany(Trip);
Location.hasMany(Trip);

Trip.belongsTo(Location);
Trip.belongsTo(Traveller);

module.exports = { Location, Traveller, Trip };

