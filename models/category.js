const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    name: {
        type: String,
        required: [true, '`{PATH}` alanı zorunludur'],
        maxlength: [30, '(`{MAXLENGTH}`) karakterden büyük olamaz'],
        minlength: [2, '(`{MINLENGTH}`) karakterden kücük olamaz'],
        unique: true
    },
    createdBy: Schema.Types.ObjectId,
    status: {
        type: Boolean,
        default: true
    },
}, {timestamps: true});

module.exports = mongoose.model('category', CategorySchema)