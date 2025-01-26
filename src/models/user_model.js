
const mongoose = require('mongoose');

/**
 * @description User schema to store the user information.
 */
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    phone_number: {
        type: String,
        trim: true
    },
    address: {
        type: String,
        trim: true
    }
}, {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const userModel = mongoose.model('users', UserSchema);
module.exports = userModel;