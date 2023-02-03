const User = require('./User');
const Well = require('./Well');
const WellData = require('./WellData');



User.hasMany(Well, {
    foreignKey: 'user_id'
});
Well.belongsTo(User, {
    foreignKey: 'user_id'
});

Well.hasMany(WellData, {
    foreignKey: 'well_id',
    onDelete: 'CASCADE',
});
WellData.belongsTo(Well, {
    foreignKey: 'well_id',
    onDelete: 'CASCADE',
});


module.exports = { User, Well, WellData };