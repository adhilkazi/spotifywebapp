import React from "react"
import lessThanIcon from '../../../images/less-than-symbol.png'
import greaterThanIcon from '../../../images/greater-than-symbol.png'
import { Link } from "react-router-dom"
export default function MainNav() {



    return (
        <>

           
            

               
                    <div className="nev-main">

                        <div className="nev-change search-nev">

                            <button>
                                <img src={lessThanIcon}></img>
                            </button>
                            <button>
                                <img src={greaterThanIcon}></img>
                            </button>

                        </div>

                        <div class="nev-login search-login">
                            <button class="btn-primery">sign up</button>
                           <Link to= "/Login"><button class="btn">login</button></Link> 

                        </div>
                    </div>


             



            


        </>


    )



}