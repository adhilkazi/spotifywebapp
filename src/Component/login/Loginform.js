import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Loginform() {
    let isLogin=true;
    

    return (
        <div>


            <div>
                <form action="">
                    <div class="login-input">
                        <label for="">Email or username</label>
                        <input type="text" placeholder="name@domin.com" class="mb-2">

                        </input>
                        <label for=" Password">Password</label>
                        <input type="password" placeholder="name@domin.com">

                        </input>
                    </div>

                    <div class="login-btn">
                    <Link to="/forntpage" state={isLogin}><button>next</button></Link>
                    
                    </div>
                    <div class="last-text">
                        <a href=""> forget your password</a>
                    </div>
                    <div class="sct-line log-line"></div>
                    <div class="last-text log-text">
                        <p>Don't have an account? </p> <a href=""> Sign up for Spotify</a>
                    </div>


                </form>
            </div>





        </div>
    )
}

export default Loginform
