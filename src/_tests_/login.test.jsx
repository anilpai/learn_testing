import React from 'react'
import { render } from '@testing-library/react'
import ReactDOM from 'react-dom'
import Login from '../components/login'

test('calls onSubmit with the username and password when submitted', () => {
  const handleSubmit = jest.fn()
  const container = document.createElement('div')
  ReactDOM.render(<Login onSubmit={handleSubmit} />, container)

  const form = container.querySelector('form')
  const { username, password } = form.elements
  username.value = 'smalls'
  password.value = 'password'

  form.dispatchEvent(new window.Event('submit'))

  expect(handleSubmit).toHaveBeenCalledTimes(1)

  expect(handleSubmit).toHaveBeenCalledWith({
    username: username.value,
    password: password.value,
  })
})

test('creates a snapshot and matches snapshot on subsequent calls', () => {
  const { container } = render(<Login onSubmit={() => {}} />)
  expect(container.firstChild).toMatchSnapshot()
})
