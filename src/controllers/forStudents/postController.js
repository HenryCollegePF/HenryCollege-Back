const { Students } = require("../../db");
const { auth0Login, auth0SignUp } = require("../../utils/auth0Utils");
const { v4: uuidv4 } = require('uuid');

//firstName, lastName, email, auth0Id, isExternal, emailVerified

const createStudent = async (info) => {
  const { firstName, lastName, email, phone, isExternal } = info;

  if (isExternal) {
    const newStudentByFirebase = await Students.create({
      firstName,
      lastName: "",
      email,
      auth0Id: uuidv4(),
      active: true,
      emailVerified: false,
      isExternal: true,
    });
    return newStudentByFirebase;
  }

  try {
    // Crea el estudiante en Auth0
    const auth = await auth0SignUp(info, "student");

    if (!auth._id) throw new Error("No se pudo crear el estudiante en Auth0");

    // Crea el estudiante en nuestra base de datos
    const newStudent = await Students.create({
      firstName,
      lastName,
      email,
      phone,
      auth0Id: auth._id,
      active: true,
      emailVerified: false,
    });

    return newStudent;
  } catch (error) {
    throw new Error(error);
  }
};

const logInStudent = async (info) => {
  const { email, password, isExternal } = info;

  if (isExternal) {
    const studentFirebase = await Students.findOne({
      where: {
        email,
      },
    });
    return { auth: { access_token: "Ingresa con Google" }, studentFirebase };
  }

  try {
    const auth = await auth0Login(email, password);

    if (!auth.access_token)
      throw new Error("No se pudo loguear el estudiante en Auth0");

    const student = await Students.findOne({
      where: {
        email,
      },
    });

    return { student, auth };
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createStudent,
  logInStudent,
};
