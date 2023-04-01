const { sequelize: { models: { Students } } } = require("../../db");

const updateMembership = async (values) => {
    const { userId, ...propiedadesAModificar } = values
    const user = await Students.findByPk(userId)
    if (!user) throw new Error(`No se encontro el estudiante con el Id ${userId}`)
  
    const studentSuscription = await user.getMembership()
    if (!studentSuscription) throw new Error("El usuario no tiene una suscripción activa")
  
    // Update
    await studentSuscription.update(propiedadesAModificar)
  
    return studentSuscription
  }

  module.exports = updateMembership