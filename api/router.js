const router = require('express').Router()
const db = require('../db.json')
const Anecdote = require('./models/Anecdote')

router.get('/', async (req, res) => {
  const results = await Anecdote.find({})
  res.json(results)
})
router.get('/testing/reset', async (_, res) => {
  if (process.env.NODE_ENV !== 'test') return
  await Anecdote.deleteMany({})
  await Anecdote.insertMany(db.anecdotes)
  res.status(200).send('reset')
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
