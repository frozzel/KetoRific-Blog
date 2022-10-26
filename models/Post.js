const { Sequelize, Model, DataTypes}= require('sequelize');
const sequelize = require('../config/config');

class Post extends Model {}
Post.init({
    title: {type: DataTypes.STRING, allowNull: false}, 
    body:{type: DataTypes.STRING, allowNull: false}, 
    image: {type: DataTypes.STRING, allowNull: false}},
    {sequelize});

module.exports= Post;