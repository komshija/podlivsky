import React from 'react'
import { Navbar,NavDropdown,Nav } from 'react-bootstrap';
const Footer = () => {
    return (
        <footer className="d-none d-md-block d-lg-block d-xl-block ">
            <Navbar fixed='bottom' className="text-white">
                <i>Copyright &copy; Podlivsky 2020</i>
                <div className="ml-auto">
                    <i className="ml-2 mr-2">Facebook</i>
                    <i className="ml-2 mr-2">Instagram</i>
                </div>
            </Navbar>
        </footer>
    )
}

export default Footer
