import React from 'react'
import '../Style/spotify.css'
import SingnupNav from '../Component/singnup/SingnupNav'
import Singnupforms from '../Component/singnup/Singnupforms'
import Singupbottom from '../Component/singnup/Singupbottom'

function Singnup() {
  return (
    <>
      <div class="singup-box">
        <SingnupNav/>
        <div class="login-container">
            <Singnupforms/>
            <Singupbottom/>
        </div>


      </div>
    </>
  )
}

export default Singnup
