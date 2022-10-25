const { Sequelize, Model, DataTypes}= require('sequelize');
const sequelize = require('../config/config');
const bcrypt = require('bcrypt');

class User extends Model {checkPassword(loginPw){bcrypt.compareSync(loginPw, this.password)}};
User.init({id: {type: DataTypes.INTEGER, allowNull: false, primaryKey: true, autoIncrement: true}}, {username:{type: DataTypes.STRING, allowNull: false}},{password:{type: DataTypes.STRING, allowNull: false, validate: {len:[8], alphaNumeric: true}}},
    {hooks:{beforeCreate: async (newUserData)=>{newUserData.password= await bcrypt.hash(newUserData.password, 10)}, beforeUpdate: async (updatedUserData)=>{updatedUserData.password= await bcrypt.hash(updatedUserData.password, 10);}}},
    {sequelize, timestamps: false, freezeTableName: true, underscored: true, modelName: 'User'});

module.exports= User;