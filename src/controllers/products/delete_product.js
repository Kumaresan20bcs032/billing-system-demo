const ProductModel = require("../../models/product_model");
const { successResponse, errorResponse } = require("../../utils/response_handler");

/**
 * @Description To delete the product details.
 * @Route       POST /product/user-tenant
 * @access      nill
 */

class DeleteProduct {
    async delete(req, res) {
        try {

            const { id } = req.params;
            const product = await ProductModel.findByIdAndDelete(id);

            if (!product) {
                return errorResponse(res, 400, "Product not found.");
            }

            return successResponse(res, 200, "Product deleted successfully.", product);

        }
        catch (error) {
            console.error("Error in product updating", error);
            return errorResponse(res, 500, error.message);
        }
    }
}

module.exports = new DeleteProduct();