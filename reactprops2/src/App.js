import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Profile from './Profile/Profile'
import ProfilePicture from './ProfilePicture.jpg'

function App() {
  function handleName() {
    alert('Hello Siwar Belkhir')
  }
  return (
    <div className="App">
      <Profile
        FullName="Siwar Belkhir"
        Bio="I am a student at GoMyCode."
        Profession="Job: I am a student"
        Pic={ProfilePicture}
        Message={handleName}
      ></Profile>
    </div>
  )
}

export default App
