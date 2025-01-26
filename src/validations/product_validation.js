const Joi = require('joi');
const { errorResponse } = require("../utils/response_handler");
const { update } = require('../controllers/products/update_product');


class ProductValidation {

    constructor() {
        this.schema = {
            create: Joi.object({
                name: Joi.string().required(),
                price: Joi.number().required(),
                quantity: Joi.number(),
                is_available: Joi.boolean()
            }),
            update: Joi.object({
                name: Joi.string(),
                price: Joi.number(),
                quantity: Joi.number(),
                is_available: Joi.boolean()
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
    update = this.validate("update")
}


module.exports = new ProductValidation();