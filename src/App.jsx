import { useState, useEffect } from 'react'
import './App.css'

export default function App() {
  const [photo, setPhoto] = useState("")
  async function getPhoto() {
    const res = await fetch('https://random.dog/woof.json')
    const data = await res.json()
    console.log(data)
    setPhoto(data.Photo)
  }

  useEffect(function() {
    getActivity()
  }

  return (
    <>
      <div className="card">
      </div>
    </>
  )
}

export default App
