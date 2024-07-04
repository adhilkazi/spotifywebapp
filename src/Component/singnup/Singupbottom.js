import React from 'react'
import GoogleIcon from '../../images/google.png'
import FacebookIcon from '../../images/facebook.png'

function Singupbottom() {
  return (
    <div>
        <div class="logline">
                <div class="or"><p>or</p></div>
                <div class="line"></div>
                
                

            </div>
            <div class="browserbtn">
                <div class="google">
                    <button><img src={GoogleIcon}></img> <p>Singn up With Google</p></button>
                </div>

            </div>
            <div class="browserbtn">
                <div class="google">
                    <button><img src={FacebookIcon}></img><p>Singn up With facebook</p></button>
                </div>

            </div>

            <div class="sct-line"></div>
            <div class="last-text"><p>All ready have account? </p><a href=""> log in here</a></div>

          <div class="details">
            <p>This site is protected by reCAPTCHA and the Google <br></br><a href="">Privacy Policy</a>and<a href=""> Terms of Service</a>apply.</p>
          </div>
      
    </div>
  )
}

export default Singupbottom
