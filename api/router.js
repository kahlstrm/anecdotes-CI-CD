const router = require("express").Router();
const Anecdote = require("./models/Anecdote");

router.get("/", async (req, res) => {
  console.log("get");
  const results = await Anecdote.find({});
  res.json(results);
});
router.post("/", async (req, res) => {
  const newAnecdote = req.body;
  const anecdote = new Anecdote(newAnecdote);
  console.log(anecdote);
  const saved = await anecdote.save();
  console.log(saved);
  res.json(saved);
});
router.put("/:id", async (req, res) => {
  console.log("put");
  const updatedAnecdote = req.body;
  console.log(updatedAnecdote);
  const updated = await Anecdote.findByIdAndUpdate(
    req.params.id,
    { votes: updatedAnecdote.votes },
    { new: true }
  );
  console.log(updated);
  res.json(updated);
});

module.exports = router;
