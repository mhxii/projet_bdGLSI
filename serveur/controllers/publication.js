const db = require("../models");
const Publication = db.publications;

exports.getAuteur = async (req, res) => {
    try {
        const authors = await Publication.find({}).toArray();
        res.status(200).json(authors);
      } catch (err) {
        res.status(500).json({ error: err.message });
      }
};
