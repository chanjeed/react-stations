// DO NOT DELETE

import React, { useState } from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */

export const App = () => {
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
      .catch(error => console.error(error))
  }
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/dalmatian/cooper2.jpg',
  )
  const [error, setError] = useState(null)
  return [
    <header>
      <h1>Dogアプリ</h1>
    </header>,
    <div className="content">
      <p className="description">犬の画像を表示するサイトです</p>,
      <div className="dog">
        <img
          className="dog-img"
          src={dogUrl}
          alt="Dog image"
          width="500"
          height="300"
        ></img>
        <button className="dog-button" onClick={() => changeDogUrl()}>
          更新
        </button>
      </div>
    </div>,
  ]
}
