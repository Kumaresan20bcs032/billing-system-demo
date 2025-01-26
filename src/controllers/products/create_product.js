const ProductModel = require("../../models/product_model");
const { successResponse, errorResponse } = require("../../utils/response_handler");

/**
 * @Description To Create the product.
 * @Route       POST /products
 * @access      nill
 */

class CreateProduct {
    async create(req, res) {
        try {

            const product = await ProductModel.create(req.body);

            if (!product) {
                return errorResponse(res, 400, "Product creation failed.");
            }

            return successResponse(res, 200, "Product created successfully", product);

        }
        catch (error) {
            console.error("Error in product creating", error);
            return errorResponse(res, 500, error.message);
        }
    }
}

module.exports = new CreateProduct();