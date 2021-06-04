// DO NOT DELETE
import React, { useState } from 'react'
import { DogImage } from './DogImage'

export const Description = props => {
  const changeDogUrl = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(res => res.json())
      .then(
        result => {
          console.log(result.message)
          setDogUrl(result.message)
        },
        error => {
          setError(error)
          setDogUrl('https://images.dog.ceo/breeds/dalmatian/cooper2.jpg')
        },
      )
  }

  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/dalmatian/cooper2.jpg',
  )
  const [error, setError] = useState(null)

  return (
    <div className="content">
      <p className="description">犬の画像を表示するサイトです</p>,
      <div className="dog">
        <DogImage url={dogUrl} />
        <button className="dog-button" onClick={() => changeDogUrl()}>
          更新
        </button>
      </div>
    </div>
  )
}
