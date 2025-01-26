
const mongoose = require('mongoose');

/**
 * @description Purchase schema to store the purchase product data.
 */

const purchaseDetailSchema = new mongoose.Schema({
    product_name: {
        type: String,
        trim: true
    },
    quantity: {
        type: Number
    },
    price: {
        type: Number
    }
}, {
    versionKey: false,
    _id: false
});

const PurchaseSchema = new mongoose.Schema({
    purchase_details: [purchaseDetailSchema],
    user_id: {
        type: mongoose.Types.ObjectId,
        ref: "users",
        required: true
    },
    purchased_total_price: {
        type: Number,
        default: 0
    }
}, {
    versionKey: false,
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

const productModel = mongoose.model('purchase', PurchaseSchema);
module.exports = productModel;