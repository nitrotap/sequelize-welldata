
const Sequelize = require('sequelize');

const sequelize = require('../config/connection')


const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

const Well = sequelize.define('well', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

const WellData = sequelize.define('wellData', {
    date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    depth: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
    pressure: {
        type: Sequelize.FLOAT,
        allowNull: false,
    },
});

// User.hasMany(Well, { onDelete: 'cascade' });



// Well.belongsTo(User);
// Well.hasMany(WellData, { onDelete: 'cascade' });
// WellData.belongsTo(Well);

sequelize.sync();

module.exports = { User, Well, WellData };
