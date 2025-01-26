const PurchaseModel = require("../../models/purchase_model");
const createUser = require("../users/create_user");
const { errorResponse, successResponse } = require("../../utils/response_handler");


/**
 * @Description To Create the purchase.
 * @Route       POST /purchase.
 * @access      nill
 */

class CreatePurchase {
    async create(req, res) {
        try {

            const { user_details, purchase_details, purchased_total_price } = req.body;

            // create purchased users here.
            const { userID: user_id } = await createUser.create(user_details);

            if (!user_id) {
                return errorResponse(res, 400, "User creation failed");
            }
            const purchase = await PurchaseModel.create({ purchase_details, purchased_total_price, user_id });

            if (!purchase) {
                return errorResponse(res, 400, "Purchase creation failed");
            }

            return successResponse(res, 200, "Purchase created successfully.", purchase);

        }
        catch (error) {
            console.error("Error in purchase creating", error);
        }
    }
}

module.exports = new CreatePurchase();