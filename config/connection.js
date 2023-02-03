require('dotenv').config();

const Sequelize = require('sequelize');


const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PW, {
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
    logging: false,
});


sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = sequelize;
