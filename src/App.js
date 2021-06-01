// DO NOT DELETE

import React, { useState } from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/dalmatian/cooper2.jpg',
  )
  return [
    <header>
      <h1>Dogアプリ</h1>
    </header>,
    <p>犬の画像を表示するサイトです</p>,
    <img src={dogUrl} alt="Dalmatian" width="500" height="300"></img>,
  ]
}
