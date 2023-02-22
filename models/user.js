const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, '`isim` alanı zorunludur'],
            maxlength: [30, '(`{MAXLENGTH}`) karakterden büyük olamaz'],
            minlength: [2, '(`{MINLENGTH}`) karakterden kücük olamaz'],
        },
        surname: {
            type: String,
            required: [true, '`soyisim` alanı zorunludur'],
            maxlength: [30, '(`{MAXLENGTH}`) karakterden büyük olamaz'],
            minlength: [2, '(`{MINLENGTH}`) karakterden kücük olamaz'],
        },
        username: {
            type: String,
            required: [true, '`kullanıcı` alanı zorunludur'],
            maxlength: [30, '(`{MAXLENGTH}`) karakterden büyük olamaz'],
            minlength: [2, '(`{MINLENGTH}`) karakterden kücük olamaz'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, '`şifre` alanı zorunludur'],
            maxlength: [30, '(`{MAXLENGTH}`) karakterden büyük olamaz'],
            minlength: [6, '(`{MINLENGTH}`) karakterden kücük olamaz'],
        },
        email: {
            type: String,
            required: [true, '`email` alanı zorunludur'],
            maxlength: [30, '(`{MAXLENGTH}`) karakterden büyük olamaz'],
            minlength: [2, '(`{MINLENGTH}`) karakterden kücük olamaz'],
            unique: true,
        },
        categories: [
            {
                type: new Schema(
                    {
                        categoryId: Schema.Types.ObjectId,
                    },
                    {timestamps: true, _id: false},
                ),
            },
        ],
        createdOn: {
            type: Date,
            default: Date.now(),
        },
        createdBy: Schema.Types.ObjectId,
        updatedOn: {
            type: Date,
        },
        updatedBy: Schema.Types.ObjectId,
        status: {
            type: Boolean,
            default: true,
        },
    },
    {timestamps: true},
);

module.exports = mongoose.model('user', UserSchema);
