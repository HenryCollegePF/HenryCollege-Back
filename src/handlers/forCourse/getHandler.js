const {
  getCoursesWithFilters,
  getCourses,
} = require("../../controllers/forCourse/getController"); //lo que viene del controller

const getHandler = async (req, res) => {
  let result = await getCourses();
  if (req.query.page == "all") {
    //este if es para que traiga todos los cursos en una sola respuesta y no por pagina
    try {
      res.status(200).json(result);
    } catch (error) {
      res.status(400).send(error.message);
    }
  } else {
    const page = req.query.page ? parseInt(req.query.page) : 1;
    const limit = 3;

    const start = (page - 1) * limit;
    const end = page * limit;

    const results = {};

    try {
      const result = await getCoursesWithFilters(req.query);

      if (end < result.length) {
        results.next = {
          page: page + 1,
        };
      }

      if (start > 0) {
        results.previous = {
          page: page - 1,
        };
      }
      results.results = result.slice(
        start,
        end
      ); /* slice: divide el array que llega por result */
      res.status(200).json(results);
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: error.message });
    }
  }
};

module.exports = getHandler;
