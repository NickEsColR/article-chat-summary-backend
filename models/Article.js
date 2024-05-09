const {Schema, model} = require('mongoose');

const ArticleSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    summary: {
        type: String,
        required: true,
    },
    initMessages: {
        type: Array,
        required: true,
    },
    chat:{
        type: Array,
        required: true,
    }
});

module.exports = model('Article', ArticleSchema);