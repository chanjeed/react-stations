// DO NOT DELETE

import * as React from 'react'
import './App.css'

/**
 *
 * @type {React.FC}
 */
export const App = () => {
  return [
    <header>
      <h1>Dogアプリ</h1>
    </header>,
    <p>犬の画像を表示するサイトです</p>,
    <img
      src="https://images.dog.ceo/breeds/dalmatian/cooper2.jpg"
      alt="Dalmatian"
      width="500"
      height="300"
    ></img>,
  ]
}
