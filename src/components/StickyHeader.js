import { useState, useEffect } from "react";
import autarquia360logo from "../img/autarquia360logo.jpg";
import hamburguericon from "../img/hamburguericon.png";



function StickyHeader() {

    const [sticky, setSticky] = useState(false);

    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 38);
            console.log(window.scrollY);
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
                <div className="links" id="myTopnav">
                    <a href="/">MUNICÍPIO</a>
                    <a href="/">AUTARQUIA360</a>
                    <a href="/">ATIVIDADE MUNICIPAL</a>
                    <a href="/">SERVIÇOS ONLINE</a>
                    <a href="/">CONTACTOS</a>
                    <a href="javascript:void(0);" class="icon" onclick={ myFunction }>
                        <img src={ hamburguericon } alt="menu icon" height="30" />
                    </a>
                </div>

            </div>
        </nav>
    );
}

export default StickyHeader;