const { sequelize: { models: { Membership } } } = require("../../db");

const createMembership = async (values) => {
    const { paymentId, userId, pricePaid } = values;
  
    const todayDate = new Date();
  
    const expirationDate = new Date();
    expirationDate.setMonth(todayDate.getMonth() + 3); // Añade 3 meses a la fecha actual
  
    const newMembership = await Membership.create({
      date: todayDate,
      pricePaid: pricePaid,
      paymentId: paymentId,
      expirationDate: expirationDate,
      StudentId: userId,
    })
  
    return newMembership
  }
  module.exports = createMembership