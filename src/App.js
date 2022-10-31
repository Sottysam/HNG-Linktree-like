import React from 'react'
import { links } from './data'
import Pic1 from "./image/PhotoGrid_Plus_1648803761282.jpg"
import Pic2 from "./image/I4G.png"
import Pic3 from "./image/logo.36d2d48a.png"
import Pic4 from "./image/Footer text.png"
import social1 from "./image/slack.png"
import social2 from "./image/Social icon.png"

const App = () => {
  return (
    <main>
      <img src={Pic1} alt="profile_pic" className='profilePics' />
      <h1>Sotunde Samuel</h1>
      {links.map((link)=>{
        const {id,name,url} = link
        return(
          <div key={id} className="hngLinks">
            <a href={url} target="_blank"><h4>{name}</h4></a>
          </div>
        )
      })}
      <div className='icon'>
        <img src={social1} alt="Slack" />
        <img src={social2} alt="Github" />
      </div>
      <div className='footer'>
        <img src={Pic3} alt="Zuri" />
        <img src={Pic4} alt="Text" className='text' />
        <img src={Pic2} alt="I4G" />
      </div>
    </main>
  )
}

export default App
