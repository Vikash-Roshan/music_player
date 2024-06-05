import React from "react";
import { FaMusic } from "react-icons/fa6";

const Nav = ({libraryStatus,setLibraryStatus}) =>{
    return(
        <nav>
            <h1>Waves</h1>
            <button onClick={()=>{setLibraryStatus(!libraryStatus);console.log("lib status",libraryStatus)}}>
                Library
                <FaMusic />
            </button>
        </nav>
    )
}
export default Nav;