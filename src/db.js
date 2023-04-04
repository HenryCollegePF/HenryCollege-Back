require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const {
  DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, /* usar cuando se haga deploy */
} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {  /* usar cuando se haga deploy */
logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
});
const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const {
  Course,
  Feedback,
  Membership,
  Students,
  Teachers
} = sequelize.models;


// Aca vendrian las relaciones
Course.belongsToMany(Students, { through: "courseNstudents" })
Students.belongsToMany(Course, { through: "courseNstudents" })
Teachers.hasMany(Course,{
  foreignKey:"teacherId",
  sourceKey:"id"
})
Course.belongsTo(Teachers,{
  foreignKey:"teacherId",
  targetId:"id"
})
Students.hasMany(Feedback,{
  foreignKey: "studentId",
  sourceKey: "id"
})  
Feedback.belongsTo(Students,{
  foreignKey: "studentId",
  targetId: "id"
})

/*Teachers.hasMany(Feedback)
Feedback.belongsTo(Teachers)*/

Course.hasMany(Feedback,{
  foreignKey: "courseId",
  sourceKey: "id"
})
Feedback.belongsTo(Course, {
  foreignKey: "courseId",
  targetId: "id"
})

Students.hasOne(Membership)
Membership.belongsTo(Students)


module.exports = {
  sequelize,
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize,     // para importart la conexión { conn } = require('./db.js');
};
