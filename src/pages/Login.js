import React from 'react'
import '../Style/spotify.css'
import Lognav from '../Component/login/Lognav'
import Loginbuttons from '../Component/login/Loginbuttons'
import Loginform from '../Component/login/Loginform'
import Loginbottom from '../Component/login/Loginbottom'

function Login() {
    return (
        <div>
            <body class="body-color">

                <div class="singup-box">
                    <Lognav />
                    <div class="loginmianbox">

                        <div class="login-container">

                         <Loginbuttons/>
                         <Loginform/>

                        </div>
                        <Loginbottom/>

                    </div>


                </div>
            </body>


        </div>
    )
}

export default Login
