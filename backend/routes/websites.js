var express = require('express');
var router = express.Router();

// TODO: establish db communication
const websites = [
  { id: 0, name: "https://www.example.com" },
  { id: 1, name: "https://www.tutorialrepublic.com" },
  { id: 2, name: "https://www.dawn.com" },
  { id: 3, name: "https://www.sreenivasarajiv.com" },
]

/* GET websites listing. */
router.get('/', function(req, res, next) {
  res.json(websites);
});

module.exports = router;
