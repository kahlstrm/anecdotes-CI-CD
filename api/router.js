const router = require('express').Router()
const Anecdote = require('./models/Anecdote')

router.get('/', async (req, res) => {
  const results = await Anecdote.find({})
  res.json(results)
})
router.post('/', async (req, res) => {
  const newAnecdote = req.body
  const anecdote = new Anecdote(newAnecdote)
  const saved = await anecdote.save()
  res.json(saved)
})
router.put('/:id', async (req, res) => {
  const updatedAnecdote = req.body
  const updated = await Anecdote.findByIdAndUpdate(
    req.params.id,
    { votes: updatedAnecdote.votes },
    { new: true }
  )
  res.json(updated)
})

module.exports = router
