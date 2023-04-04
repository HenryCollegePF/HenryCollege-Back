const {Students, Membership} = require("../../db")

const getStudents = async() => {
    const db = await Students.findAll()
    return db
}

const getStudentByAuth0Id = async (auth0Id) => {
    const user = await Students.findOne({
        where: { auth0Id },
        include: [Membership]
    });
    if (!user) throw new Error('No se encontro un usuario con ese ID.')
    return user
}

module.exports = {
    getStudents,
    getStudentByAuth0Id,
}