
import React from "react"
import spimg from '../../../images/spotify-2.png'
import homeIcon from '../../../images/home.png'
import searchIcone from '../../../images/magnifying-glass.png'
import { Link } from "react-router-dom"
import Musicplying from "../../../musicplaying/Musicplying"
export default function Navbar() {

    return (
        <>

           
                    <div class="icon-box">

                        <div class="icon-body">

                            <img src={spimg} alt=""></img>
                            <h1>spotify</h1>
                        </div>
                        <div class="icon-body">
                            <img src={homeIcon} alt=""></img>
                            <h3> home</h3>
                        </div>
                        <div class="icon-body">

                            <img src={searchIcone} alt=""></img>
                            <h2>search</h2>
                        </div>

                    </div>

              

        </>

    )
}