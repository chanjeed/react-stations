// DO NOT DELETE

import React from 'react'
import './App.css'
import { Description } from './Description'
import { Header } from './Header'
import { DogListContainer } from './DogListContainer'

/**
 *
 * @type {React.FC}
 */

export const App = () => {
  // const result = await fetch('https://dog.ceo/api/breeds/image/random')
  // result = result.json()
  // setDogUrl(result.message)

  return (
    <>
      <DogListContainer />
      <Header />

      <Description />
    </>
  )
}
