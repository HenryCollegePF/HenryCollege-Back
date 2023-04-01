const { sequelize: { models: { Membership, Students } } } = require("../../db");


const getMemberships = async () => {
  const membership = await Membership.findAll({ include: Students })

  return membership
}

const getMembershipByUserId = async (userId) => {
  const user = await Students.findByPk(userId)
  if (!user) throw new Error(`No se encontro el estudiante con el Id ${userId}`)

  const studentSuscription = await user.getMembership()
  if (!studentSuscription) throw new Error("El usuario no tiene una suscripción activa")

  return studentSuscription
}

module.exports = { getMemberships, getMembershipByUserId }