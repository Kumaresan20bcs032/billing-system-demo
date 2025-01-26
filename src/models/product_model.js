
const mongoose = require('mongoose');

/**
 * @description Product schema to store the product details.
 */
const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    price: {
        type: Number,
    },
    quantity: {
        type: Number,
        default: 0
    },
    is_available: {
        type: Boolean,
        default: true
    }
}, {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const productModel = mongoose.model('products', ProductSchema);
module.exports = productModel;