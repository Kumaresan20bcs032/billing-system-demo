const ProductModel = require("../../models/product_model");
const { successResponse, errorResponse } = require("../../utils/response_handler");

/**
 * @Description To update the product details.
 * @Route       PATCH /products/:id
 * @access      nill
 */

class UpdateProduct {
    async update(req, res) {
        try {

            const { id } = req.params;
            const product = await ProductModel.findByIdAndUpdate(id, req.body, { new: true });

            if (!product) {
                return errorResponse(res, 400, "Product not found.");
            }

            return successResponse(res, 200, "Product updated successfully.", product);

        }
        catch (error) {
            console.error("Error in product updating", error);
            return errorResponse(res, 500, error.message);
        }
    }
}

module.exports = new UpdateProduct();