import React, { useState, useEffect } from 'react'
export const DogListContainer = props => {
  const [breeds, setBreeds] = useState(0)

  useEffect(async () => {
    const result = await fetch('https://dog.ceo/api/breeds/list/all')
    result = result.json()
    setBreeds(Object.keys(result.message))
  }, [])

  return <div>{breeds}</div>
}
