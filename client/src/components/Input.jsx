import React from 'react'

function Input({ name, value, setFunction }) {
  return (
    <label>
      {name}
      <input
        name={name}
        type="text"
        placeholder="product Name"
        value={value}
        onChange={setFunction} />
    </label>
  )
}

export default Input
