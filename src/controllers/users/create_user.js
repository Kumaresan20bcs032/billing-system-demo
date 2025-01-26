const UserModel = require("../../models/user_model");


/**
 * @Description To Create the users.
 * @Route       not defined yet
 * @access      nill
 */

class CreateUsers {
    async create(data) {
        try {

            const user = await UserModel.create(data);

            if (!user) {
                return { userID: null };
            }
            
            return { userID: user._id };

        }
        catch (error) {
            console.error("Error in user creating", error);
        }
    }
}

module.exports = new CreateUsers();