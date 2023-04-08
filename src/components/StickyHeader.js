import { useState, useEffect } from "react";
import autarquia360logo from "../img/autarquia360logo.jpg"


const StickyHeader = () => {
    return ( 
        <div className="sticky-header">
            <div>
                <a href="https://www.autarquia360.com/">
                    <img src={ autarquia360logo } alt="Autarquia360 link" height="38"/>
                </a>
            </div>

        </div>
     );
}
 
export default StickyHeader;