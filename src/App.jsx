import { useState, useEffect } from 'react'
import './App.css'
const imageUrl = "https://random.dog/woof.json"

export default function App() {
  
  const [photo, setPhoto] = useState()
  
  async function getPhoto() {
    //const res = await fetch(imageUrl)
    //const imageBlob = await res.blob();
    //const imageObjectURL = URL.createObjectURL(imageBlob);
    //setPhoto(imageObjectURL.url)
    const res = await fetch('https://random.dog/woof.json')
    const data = await res.json()
    console.log(url.data.photo)
    setPhoto(data.photo)
  }

  useEffect(function() {
    getPhoto()
  },[])

  return (
    <>
      <div className="card">
          <img src={photo} />
        </div>
    </>
  )
}

