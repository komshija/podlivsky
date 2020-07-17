import React from 'react'
import Logo from "../../images/logo.png";
import LogoRed from "../../images/logo-red.png";
const About = () => {
    document.title = "About • Podlivsky";
    return (
        <div className="page">

            <div className="container-fluid text-white text-center" role="alert">
               
                    <img src={Logo} className="w-50" alt="podlivsky-logo" />
                    <p>
                    Podlivsky was founded by Ilija Nikolic, a young Serbian video artist. 
                    He started his work in July 2018, with his first official music video being ‘’Sedmo nebo’’, a song by Elon Hendrix. 
                    </p>

                    <p>
                    Since than, he is pushing his unique aesthetic and striving for originality and quality in all of his work. 
                    </p>

                    <p>
                    His future plans regarding his art include establishing his own video and editing company, with employees being fellow editors and graphic designers.
                    </p>

                    <p>
                    He has collaborated with numerous labels such as: Apollo, Hazze, Bassivity Digital and Mahala Bounce. 
                    Apart from official labels, he has done work for many independent artists.
                    </p>

                    <img src={LogoRed} className="w-50" alt="podlivsky-logo-red" />
            </div>
        </div>
    )
}

export default About
