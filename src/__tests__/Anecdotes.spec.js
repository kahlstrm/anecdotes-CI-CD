import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import App from '../App'
import store from '../store'
import { AnecdoteFormContainer } from '../components/AnecdoteForm'
import AnecdoteList from '../components/AnecdoteList'
import mockAnecdotes from '../../db.json'
describe('<App />', () => {
  store.dispatch({ type: 'INIT', data: mockAnecdotes.anecdotes })

  it('should exist text Anecdotes', () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(container.querySelector('h2')).toHaveTextContent('Anecdotes')
  })
  describe('<AnecdoteList/>', () => {
    it('should list anecdotes', () => {
      const { getByText } = render(
        <Provider store={store}>
          <AnecdoteList />
        </Provider>
      )
      expect(getByText('If it hurts, do it more often')).toBeVisible()
    })
  })
  describe('<AnecdoteForm/>', () => {
    it('should process creating a new vote properly', () => {
      const fn = jest.fn()
      const { getByText, getByTestId } = render(
        <AnecdoteFormContainer onSubmit={fn} />
      )
      fireEvent.change(getByTestId('inputforcreate'), {
        target: { value: 'this is a test note' },
      })
      fireEvent.click(getByText('create'))
      expect(fn).toBeCalledTimes(1)
      expect(fn).toBeCalledWith('this is a test note')
    })
  })
})
