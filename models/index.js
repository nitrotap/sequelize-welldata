
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
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    date: {
        type: Sequelize.DATE,

    },
    depth: {
        type: Sequelize.FLOAT,

    },
    pressure: {
        type: Sequelize.FLOAT,

    },
    temperature: {
        type: Sequelize.FLOAT,

    },
    oil: {
        type: Sequelize.FLOAT,

    },
    water: {
        type: Sequelize.FLOAT,

    },
    gas: {
        type: Sequelize.FLOAT,

    },
    water_cut: {
        type: Sequelize.FLOAT,

    },
    gas_oil_ratio: {
        type: Sequelize.FLOAT,

    },
    oil_gravity: {
        type: Sequelize.FLOAT,

    },
});




// User.hasMany(Well, { onDelete: 'cascade' });

// Well.hasMany(WellData, { onDelete: 'cascade' });
// WellData.belongsTo(Well);

sequelize.sync();

module.exports = { User, Well, WellData };
