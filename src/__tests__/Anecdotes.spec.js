import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { Provider } from 'react-redux'
import App from '../App'
import store from '../store'
import { AnecdoteFormContainer } from '../components/AnecdoteForm'

describe('<App />', () => {
  it('should exist text Anecdotes', () => {
    const { container } = render(
      <Provider store={store}>
        <App />
      </Provider>
    )
    expect(container.querySelector('h2')).toHaveTextContent('Anecdotes')
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
