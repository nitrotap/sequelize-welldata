// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

class WellData extends Model { };

WellData.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        well_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'well',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        oil: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        gas: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        water: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        comments: {
            type: DataTypes.STRING,
            allowNull: true,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'wellData',
    }
);

module.exports = WellData;
