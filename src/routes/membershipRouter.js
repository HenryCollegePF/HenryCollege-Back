const { Router } = require("express");
const { sequelize: { models: { Membership, Students } } } = require("../db");
const membershipRouter = Router();

// Controllers -> Maneja la logica
const getMemberships = async () => { 
  const membership = await Membership.findAll({ include: Students })

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
    StudentId: userId,
  })

  return newMembership
}

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

const removeMembership = async (userId) => {
  const user = await Students.findByPk(userId)
  if (!user) throw new Error(`No se encontro el estudiante con el Id ${userId}`)

  const studentSuscription = await user.getMembership()
  if (!studentSuscription) throw new Error("El usuario no tiene una suscripción activa")

  await studentSuscription.destroy()
}

// Handlers -> Le responde al front con res.send
const getMembershipHandler = async (req, res) => {
  try {
    const memberships = await getMemberships();
    res.send(memberships)
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
}

const postMembershipHandler = async (req, res) => {
  try {
    const postMembership = await createMembership(req.body);
    res.send(postMembership)
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
}

const updateMembershipHandler = async (req,res) => {
  try {
    const editMembership = await updateMembership(req.body);
    res.send(editMembership)
  } catch (error) {
    console.log(error)
    res.status(500).send(error.message)
  }
}

const removeMembershipHandler = async (req,res) => {
  try {
    const id = Number.parseInt(req.query.userId)
    await removeMembership(id);
    res.send("la membresía fue eliminada con éxito")
  } catch (error) {
    console.log(error);
    res.status(500).send(error.message)
  }
}

// Routear los handlers
membershipRouter.get("/", getMembershipHandler)
membershipRouter.post("/", postMembershipHandler)
membershipRouter.put("/", updateMembershipHandler)
membershipRouter.delete("/", removeMembershipHandler)

module.exports = membershipRouter;
