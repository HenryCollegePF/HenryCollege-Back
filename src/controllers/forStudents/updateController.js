const { Students } = require("../../db")
const { changePassword } = require("../../utils/auth0Utils")

const updateController = async (userId) => {
    const user = await Students.findByPk(userId)
    if (!user) throw new Error("No se encontro el usuario con el id solicitado")
    const response = await changePassword(user.email)
    return response
}

module.exports = updateController