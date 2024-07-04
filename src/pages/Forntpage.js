import React from 'react'
import Navbar from '../Component/frontpage/Leftnev/Navbar'
import '../Style/spotify.css'
import Centernav from '../Component/frontpage/Leftnev/Centernav'
import Bottomnav from '../Component/frontpage/Leftnev/Bottomnav'
import MainNav from '../Component/frontpage/Main/MainNav'
import Playlist from '../Component/frontpage/Main/Playlist'
import LastBottam from '../Component/frontpage/Bottomnav/LastBottam'
import Musicplying from '../musicplaying/Musicplying'
import { useLocation } from 'react-router-dom'
function Forntpage() {
  const location=useLocation()
  console.log(location.state)
  return (
    <>
      <div class="main-container">
          <div class="primary-box">
          <Navbar/>
          <Centernav/>
          <Bottomnav/>
          
        
          </div>
          <div class="secondry-box">
            <MainNav/>
            <Playlist/>

          </div>
      </div>

      {/* <LastBottam/> */}
      {location.state==null ? <LastBottam/>:<Musicplying/>}
      
      </>
      
     
      

    
    
  )
}

export default Forntpage
