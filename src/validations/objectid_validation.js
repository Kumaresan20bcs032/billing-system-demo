const Joi = require('joi');
const { errorResponse } = require("../utils/response_handler");


class IdValidation {

    constructor() {
        this.schema = {
            validate: Joi.string().hex().length(24).required().error(new Error("Must be vaild id."))
        }
    }

    validate = (schemaName) => {
        return (req, res, next) => {
            const { error } = this.schema[schemaName].validate(req.params.id);
            if (error) {
                const message = error.message.replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, '');
                return errorResponse(res, 400, message);
            }
            next();
        }
    }

    idValidate = this.validate("validate")

}


module.exports = new IdValidation()