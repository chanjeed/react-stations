// DO NOT DELETE
import React from 'react'
export const DogImage = props => {
  return (
    <img
      className="dog-img"
      src={props.url}
      alt="Dog image"
      width="500"
      height="300"
    ></img>
  )
}
