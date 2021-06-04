// DO NOT DELETE
import React from 'react'
export const DogListContainer = props => {
  const [breeds, setBreeds] = useState(0)

  useEffect(async () => {
    const result = await fetch('https://dog.ceo/api/breeds/list/all')
    result = result.json()
    setBreeds(result.message)
  })

  return (
    <img
      className="dog-img"
      src={props.url}
      alt="Dog image"
      width="500"
      height="300"
    ></img>
  )
}
