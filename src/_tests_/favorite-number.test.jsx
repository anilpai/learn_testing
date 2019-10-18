import React from 'react'
import { render } from '@testing-library/react'
import { FavoriteNumber } from '../components/favorite-number'
import '@testing-library/jest-dom/extend-expect'

test('renders a label input with a label "Favorite Number" ', () => {
  const { getByLabelText } = render(<FavoriteNumber />)
  const input = getByLabelText(/favorite number/i)
  expect(input).toHaveAttribute('type', 'number')
})
