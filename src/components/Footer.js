import React from 'react'
import { Navbar } from 'react-bootstrap';
const Footer = () => {
    return (
        <footer className="d-none d-md-block d-lg-block d-xl-block mt-2">
            <Navbar fixed='bottom' className="text-white">
                <i>&copy; 2018-2020 Podlivsky All right reserved</i>
                <div className="ml-auto">
                    <a href="https://www.facebook.com/podlivsky/" target="_blank" rel="noopener noreferrer"><i className="ml-2 mr-2">Facebook</i></a>
                    <a href="https://www.instagram.com/podlivsky/" target="_blank" rel="noopener noreferrer"><i className="ml-2 mr-2">Instagram</i></a>
                </div>
            </Navbar>
        </footer>
    )
}

export default Footer
