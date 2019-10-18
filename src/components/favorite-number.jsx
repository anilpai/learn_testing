import React, { useState } from 'react'
import { render } from '@testing-library/react'

const FavoriteNumber = ({ min = 1, max = 9 }) => {
  const [number, setNumber] = useState(0)
  const [numberEntered, setNumberEntered] = useState(false)

  const isValid = !numberEntered || (number >= min && number <= max)

  const handleChange = e => {
    setNumber(Number(e.target.value))
    setNumberEntered(true)
  }

  return (
    <div>
      <label htmlFor="favorite-number">Favorite Number</label>
      <input
        id="favorite-number"
        type="number"
        value={number}
        onChange={handleChange}
      />
      {isValid ? null : (
        <div data-testid="error-message">The number is invalid</div>
      )}
    </div>
  )
}

export { FavoriteNumber }
