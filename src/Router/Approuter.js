import React from 'react'
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom'
import Forntpage from '../pages/Forntpage'
import Singnup from '../pages/Singnup'
import Login from '../pages/Login'
import Musicplying from '../musicplaying/Musicplying'




const Approuter = () => {
  return (
    <div>
      
    <Routes>
<Route path="/" index element={<Forntpage/>}/>
<Route path="Singnup" element={<Singnup/>}/>
<Route path="Login" element={<Login/>}/>
<Route path="forntpage" element={<Forntpage/>}/>

   </Routes>  
    </div>
  )
}

export default Approuter
