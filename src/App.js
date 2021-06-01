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
          console.log('Error')
          setError(error)
          setDogUrl('https://images.dog.ceo/breeds/dalmatian/cooper2.jpg')
        },
      )
  }
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/dalmatian/cooper2.jpg',
  )
  const [error, setError] = useState(null)
  return [
    <header>
      <h1>Dogアプリ</h1>
    </header>,
    <p>犬の画像を表示するサイトです</p>,
    <img src={dogUrl} alt="Dalmatian" width="500" height="300"></img>,
    <br />,
    <br />,
    <button onClick={() => changeDogUrl()}>更新</button>,
  ]
}
