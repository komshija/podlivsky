import React from 'react'
import Logo from "../../images/logo.png";
import LogoRed from "../../images/logo-red.png";
const About = () => {
    return (
        <div className="page">
            <div className="container text-white text-center" role="alert">
            <img src={Logo} className="w-50" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled it to
              make a type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of Letraset
              sheets containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p>

            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p>

            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p>

            <img src={LogoRed} className="w-50" />
            </div>
        </div>
    )
}

export default About