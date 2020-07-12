import React, {useState} from 'react'
import Logo from "../../images/logo.png";
import LogoRed from "../../images/logo-red.png";

const HomePage = () => {
    const [image,setImage] = useState(Logo);
    
    return (
        <div className="text-center h-100 page">

            <img className="w-75 ml-auto mr-auto img-fluid" 
            id="main-logo"
            src={image} 
            onMouseOver = {
                () => setImage(LogoRed)
            } 
            onMouseOut = {
                () => setImage(Logo)
            }></img>
            <div className="d-block d-sm-block d-md-block d-lg-none">
                <img className="w-75 ml-auto mr-auto img-fluid" 
                id="main-logo"
                src={image} />

                <img className="w-75 ml-auto mr-auto img-fluid" 
                id="main-logo"
                src={image} />
            </div>


        </div>
    )
}

export default HomePage
