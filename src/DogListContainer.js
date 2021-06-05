import React, { useState, useEffect } from 'react'
import { BreedsSelect } from './BreedsSelect'

export const DogListContainer = props => {
  const [selectedBreed, setSelectedBreed] = useState([])
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

  const showImgList = async showSelect => {
    // console.log('fetch ' + showSelect)
    const result = await fetch(
      'https://dog.ceo/api/breed/' + showSelect + '/images/random/12',
    )
    var img_list = await result.json()
    img_list = img_list.message
    setSelectedBreed(img_list)
  }

  const ImgList = () => {
    const items = selectedBreed
    const img = Object.keys(items).map(item => (
      <img className="doglist-img" src={items[item]} />
    ))
    return <div className="doglist-container">{img}</div>
  }

  return (
    <>
      <BreedsSelect breeds={breeds} callShowImgList={showImgList} />
      <ImgList />
    </>
  )
}
