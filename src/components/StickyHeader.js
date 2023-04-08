import { useState, useEffect } from "react";
import autarquia360logo from "../img/autarquia360logo.jpg";
import './StickyHeader.css';
import hamburguericon from "../img/hamburguericon.png";





function StickyHeader() {



    const [showNavbar, setShowNavbar] = useState(false)
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    }

    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 38);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <nav className={`${sticky ? "sticky" : ""}`}>

            <div className="sticky-header">

                <div>
                    <a href="https://www.autarquia360.com/">
                        <img src={autarquia360logo} alt="Autarquia360 link" height="38" />
                    </a>
                </div>

                <div className="links">

                    <div className="menu-icon" onClick={handleShowNavbar}>
                        <img src={hamburguericon} alt="menu item" height="25"/>
                    </div>

                    <div className={`nav-elements  ${showNavbar && 'active'}`}>
                        <ul>
                            <li>
                                <a href="/">MUNICÍPIO</a>
                            </li>
                            <li>
                                <a href="/">AUTARQUIA360</a>
                            </li>
                            <li>
                                <a href="/">ATIVIDADE MUNICIPAL</a>
                            </li>
                            <li>
                                <a href="/">SERVIÇOS ONLINE</a>
                            </li>
                            <li>
                                <a href="/">CONTACTOS</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </nav>
    );
}


export default StickyHeader;