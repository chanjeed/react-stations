// DO NOT DELETE
import React, { useState } from 'react'

export const BreedsSelect = props => {
  const [value, setValue] = useState('affenpinscher')
  const [select, setSelect] = useState('affenpinscher')

  const selectChange = e => {
    setSelect(e.target.value)
  }

  const breeds = Array.from(props.breeds)

  return (
    <div className="breeds-select">
      <label for="breeds-select" className="breeds-select-label">
        Breeds List
      </label>
      <select
        className="breeds-select-dropdown"
        value={select}
        onChange={selectChange}
      >
        {/* <option value="null">--Select--</option> */}
        {breeds.map(x => (
          <option key={x}>{x}</option>
        ))}
      </select>
    </div>
  )
}
