// DO NOT DELETE
import React, { useState } from 'react'

export const BreedsSelect = props => {
  const [showSelect, setShowSelect] = useState('affenpinscher')
  const [select, setSelect] = useState('affenpinscher')

  const selectChange = e => {
    setSelect(e.target.value)
    // console.log('selectChange ' + e.target.value)
  }

  const showSelectChange = async e => {
    new Promise(resolve => setShowSelect(select))
    // console.log('showSelectChange ' + select)
    props.callShowImgList(select)
  }

  const breeds = Array.from(props.breeds)

  return (
    <div className="breeds-select">
      <label className="breeds-select-label">Breeds List</label>
      <select className="breeds-select-dropdown" onChange={selectChange}>
        {breeds.map(x => (
          <option key={x}>{x}</option>
        ))}
      </select>
      <button
        className="doglist-button"
        value={showSelect}
        onClick={showSelectChange}
      >
        表示
      </button>
    </div>
  )
}
