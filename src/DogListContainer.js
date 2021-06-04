import React, { useState, useEffect } from 'react'
export const DogListContainer = props => {
  const [breeds, setBreeds] = useState(0)

  useEffect(() => {
    async function getBreedsList() {
      const breeds_list = await fetch('https://dog.ceo/api/breeds/list/all')
      breeds_list = breeds_list.json()
      console.log(breeds_list)
      setBreeds(breeds_list)
    }
    getBreedsList()
  }, [])

  return <h2>Hello</h2>
}
