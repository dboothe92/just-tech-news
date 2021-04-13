const {Model, DataTypes} = require('sequelize');
const sequelize = require('../config/connection');

//create User model
class User extends Model {}

//Define table and columns
User.init(
    {
        //TABLE COLUMNS
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [4]
            }
        }
    },
    {
        //TABLE CONFIG
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        madelName: 'user'
    }
);

module.exports = User;