const { Router } = require("express");
const { sequelize: { models: { Membership } } } = require("../db");
const membershipRouter = Router();

// 1. GET que traiga todas las membresías y las devuelva ✅
// 2. POST para que cree una nueva membresia y la asigne a un estudiante ✅
// 3. UPDATE que permita modificar la fecha en que vence la membresia
// 4. DELETE que borre membresias

// Controllers -> Maneja la logica
const getMemberships = async () => { // Una promesa
  const membership = await Membership.findAll()

  return membership
}

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
    userId: userId,
  })

  return newMembership
}

const updateMembership = async (values) => {

}

// Handlers -> Le responde al front con res.send
const getMembershipHandler = async (req, res) => {
  const memberships = await getMemberships();
  res.send(memberships)
}

const postMembershipHandler = async (req, res) => {
  const postMembership = await createMembership(req.body);
  res.send(postMembership)
}

// Routear los handlers
membershipRouter.get("/membership", getMembershipHandler)
membershipRouter.post("/membership", postMembershipHandler)

module.exports = membershipRouter;
