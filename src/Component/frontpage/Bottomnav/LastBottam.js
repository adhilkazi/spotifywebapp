import React from 'react'
import { Link } from 'react-router-dom'
import Singnup from '../../../pages/Singnup'

function LastBottam() {
  return (
    <div>
          <div className="singup-bottam">
            
            <div>
                <div className="signup">
                    <div className="signup-body">
                        <div  className="sing-text">
                        <h4>preview of spotify</h4>
                        <p>sign up get unlimited song and broducaste with ossicianal adds</p>
                        </div>
                        <div className="sing-btn">
                      <Link to="/Singnup">
                      <button >signup for me</button>
                       </Link>
                       </div> 
                    </div>
                </div>
    
            </div>
            
    
        </div>
      
    </div>
  )
}

export default LastBottam
