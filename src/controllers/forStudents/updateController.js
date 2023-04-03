
const {auth0} = require("auth0-js")


const updateController = async (userId,newPassword) => {
await auth0.updateUser({ id: userId }, { password: newPassword });
return "Password updated successfully"
}
module.exports = updateController