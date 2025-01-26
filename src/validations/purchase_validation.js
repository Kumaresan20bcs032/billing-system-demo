const Joi = require('joi');
const { errorResponse } = require("../utils/response_handler");
const { update } = require('../controllers/products/update_product');


class PurchaseValidation {

    constructor() {
        this.schema = {
            create: Joi.object({
                user_details: Joi.object({
                    name: Joi.string().required(),
                    phone_number: Joi.string().min(8).max(15),
                    address: Joi.string()
                }).required(),
                purchase_details: Joi.array()
                    .items(
                        Joi.object({
                            product_name: Joi.string().trim().required().messages({
                                'string.base': 'Product name must be a string.',
                                'string.empty': 'Product name is required.',
                                'any.required': 'Product name is required.',
                            }),
                            quantity: Joi.number().positive().integer().required().messages({
                                'number.base': 'Quantity must be a number.',
                                'number.positive': 'Quantity must be greater than zero.',
                                'number.integer': 'Quantity must be an integer.',
                                'any.required': 'Quantity is required.',
                            }),
                            price: Joi.number().positive().required().messages({
                                'number.base': 'Price must be a number.',
                                'number.positive': 'Price must be greater than zero.',
                                'any.required': 'Price is required.',
                            }),
                        })
                    ).min(1).required().messages({
                        'array.base': 'Purchase details must be an array.',
                        'array.min': 'At least one purchase detail is required.',
                        'any.required': 'Purchase details are required.',
                    }),
                purchased_total_price: Joi.number().positive()
            })
        }
    }

    validate = (schemaName) => {
        return (req, res, next) => {

            const { error } = this.schema[schemaName].validate(req.body);
            if (error) {
                const message = error.message.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
                return errorResponse(res, 400, message);
            }
            next();
        }
    }

    create = this.validate("create")
}


module.exports = new PurchaseValidation();