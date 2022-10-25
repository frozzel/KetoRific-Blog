const { Sequelize, Model, DataTypes}= require('sequelize');
const sequelize = require('../config/config');
const bcrypt = require('bcrypt');

class User extends Model {}
User.init({id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true}}, {username:{type: DataTypes.STRING, allowNull: false}},{password:{type: DataTypes.STRING, allowNull: false, validate: {len:[8], alphaNumeric: true}}},{sequelize});

module.exports= User;