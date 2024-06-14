module.exports =  app => {
  const publication = require("../controllers/publication.js");
  let router = require("express").Router();

  // router.get("/", publication.getAuteur);
  router.get("/", (publication.getAuteur));

  app.use("/authors", router);
};
