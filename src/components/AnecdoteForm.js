import React, { useState } from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
export const AnecdoteFormContainer = (props) => {
  const [value, setValue] = useState('')
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        props.onSubmit(value)
      }}
    >
      <div>
        <input
          data-testid="inputforcreate"
          name="anecdote"
          value={value}
          onChange={({ target }) => setValue(target.value)}
        />
      </div>
      <button type="submit">create</button>
    </form>
  )
}
const AnecdoteForm = (props) => {
  const addNote = async (value) => {
    // eslint-disable-next-line no-console
    console.log(value)
    props.createAnecdote(value)
    // console.log('vote', id)
  }

  return (
    <div>
      <h2>create new</h2>
      <AnecdoteFormContainer onSubmit={addNote} />
    </div>
  )
}

export default connect(null, { createAnecdote })(AnecdoteForm)
