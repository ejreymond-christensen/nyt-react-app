const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articles"
router.route("/")
  .get(articlesController.findAll)
  .put(articlesController.save)
  .delete(articlesController.remove);


module.exports = router;
