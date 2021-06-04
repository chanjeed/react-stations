import React, { useState, useEffect } from 'react'
export const DogListContainer = props => {
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
  console.log('Hello2')

  return <h2>Get breeds</h2>
}
