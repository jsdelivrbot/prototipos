/*jshint esversion: 6 */ 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String,
});

module.exports = PostSchema;