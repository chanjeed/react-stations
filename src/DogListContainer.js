import React, { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'
export const DogListContainer = props => {
  const [selectedBreed, setSelectedBreed] = useState(0)
  const [breeds, setBreeds] = useState(0)

  useEffect(() => {
    async function getBreedsList() {
      const result = await fetch('https://dog.ceo/api/breeds/list/all')
      var breeds_list = await result.json()
      breeds_list = Object.keys(breeds_list.message)
      setBreeds(breeds_list)
    }
    getBreedsList()
  }, [])

  return <BreedsSelect breeds={breeds} />
}
