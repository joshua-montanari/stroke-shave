const router = require("express").Router();
let Score = require("../models/score.model");

router.route("/").get((req, res) => {
  Score.find()
    .then((scores) => res.json(scores))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const totalScore = req.body.totalScore;
  const course = req.body.course;
  const fir = Number(req.body.fir);
  const gir = Number(req.body.gir);
  const putts = Number(req.body.putts);
  const pen = Number(req.body.pen);
  const tees = req.body.tess;
  const holeData = req.body.holeData;
  const strokesGained = req.body.strokesGained;
  const date = Date.parse(req.body.date);

  const newScore = new Score({
    username,
    totalScore,
    course,
    fir,
    gir,
    putts,
    pen,
    tees,
    holeData,
    strokesGained,
    date,
  });

  newScore
    .save()
    .then(() => res.json("Score added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Score.findById(req.params.id)
    .then((score) => res.json(score))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Score.findByIdAndDelete(req.params.id)
    .then(() => res.json("Score deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Score.findById(req.params.id)
    .then((score) => {
      score.username = req.body.username;
      score.course = req.body.course;
      score.totalScore = req.body.totalScore;
      score.fir = Number(req.body.fir);
      score.gir = Number(req.body.gir);
      score.putts = Number(req.body.putts);
      score.pen = Number(req.body.pen);
      score.tees = req.body.tess;
      score.holeData = req.body.holeData;
      score.strokesGained = req.body.strokesGained;
      score.date = Date.parse(req.body.date);

      score
        .save()
        .then(() => res.json("Score updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
