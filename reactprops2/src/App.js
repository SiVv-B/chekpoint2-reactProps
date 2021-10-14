import React from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import Profile from './Profile/Profile'
import ProfilePicture from './ProfilePicture.jpg'

toast.configure()
function App() {
  const notify = () => {
    toast('Hello Siwar! Welcome to your profile!')
  }
  return (
    <div className="App">
      <Profile
        FullName="Siwar Belkhir"
        Bio="I am a student at GoMyCode."
        Profession="I am a student"
        Pic={ProfilePicture}
      ></Profile>
      <button onClick={notify} style={{ marginLeft: '18%' }}>
        Click me
      </button>
    </div>
  )
}

export default App
