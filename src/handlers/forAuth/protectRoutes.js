const { auth } = require('express-oauth2-jwt-bearer');
const { Router } = require('express');
const authRouter = Router();

// Middleware de autorización. Cuando se usa, el token de acceso debe
// existir y verificarse contra el conjunto de claves JSON Web de Auth0.
const checkJwt = auth({
  audience: process.env.AUTH0_AUDIENCE,
  issuerBaseURL: process.env.AUTH0_DOMAIN,
});

authRouter.use(checkJwt, (req, res, next) => {
  
})

module.exports = checkJwt;
