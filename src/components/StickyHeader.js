import { useState, useEffect } from "react";
import autarquia360logo from "../img/autarquia360logo.jpg"

function StickyHeader() {

const [sticky, setSticky] = useState(false);

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
                    <img src={ autarquia360logo } alt="Autarquia360 link" height="38"/>
                </a>
            </div>
            <div className="links">
                <a href="/">MUNICÍPIO</a>
                <a href="/">AUTARQUIA360</a>
                <a href="/">ATIVIDADE MUNICIPAL</a>
                <a href="/">SERVIÇOS ONLINE</a>
                <a href="/">CONTACTOS</a>
            </div>

        </div>
        </nav>
     );
}
 
export default StickyHeader;