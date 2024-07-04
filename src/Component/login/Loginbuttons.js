import React from 'react'
import GoogleIcon from '../../images/google.png'
import FacebookIcon from '../../images/facebook.png'
import AppleIcon from '../../images/apple-black-logo.png'
import { Link } from 'react-router-dom'

function Loginbuttons() {
    return (
        <div>
            <div class="">
                <h1>Log in to Spotify</h1>


            </div>

            <div class="logline"> </div>





            <div class="browserbtn">
                <div class="google">
                    <button><img src={GoogleIcon} alt=""></img>
                        <p>Singn up With Google</p>
                    </button>
                </div>

            </div>
            <div class="browserbtn">
                <div class="google">
                    <button><img src={FacebookIcon} alt=""></img>
                        <p>Singn up With facebook</p>
                    </button>
                </div>

            </div>
            <div class="browserbtn">
                <div class="google">
                    <button><img src={AppleIcon} alt=""></img>
                        <p>Singn up With Google</p>
                    </button>
                </div>

            </div>
            <div class="browserbtn">
                <div class="google phon">
                    <button>
                        <p>continue with phon number</p>
                    </button>
                </div>

            </div>
            <div class="sct-line"></div>
        </div>
    )
}

export default Loginbuttons
