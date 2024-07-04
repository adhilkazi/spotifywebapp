


import React from "react"
import LibraryIcon from '../../../images/library.png'
import pluIcon from '../../../images/plus.png'



export default function Centernav() {


    return (

        <>


      



                    <div class="card-library">

                        <div class="library-body">
                            <img src={LibraryIcon} className="library-img"></img>
                            <h2>your library</h2>
                            <img src={pluIcon} ></img>


                        </div>
                        <div class="cursal">
                            <div class="nev-create">

                                <div class="create-body">
                                    <h6>create your first playlist</h6>
                                    <p>its easy will help you</p>
                                    <button>create playlist</button>
                                </div>

                            </div>


                            <div class="nev-detials">

                                <div class="create-body">
                                    <h6>let find from podcast from follow</h6>
                                    <p>will keep you updated on new episodes</p>

                                </div>

                            </div>
                            <div></div>
                        </div>

                    </div>
             

        </>

    )
}