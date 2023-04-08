import facebookwhite2x from "../img/facebookwhite2x.png";
import instagramwhite from "../img/instagramwhite.png";
import magnifiersearchwhite from "../img/magnifiersearchwhite.png";
import './TopHeader.css';

function showSearchAlert() {
    const searchString = document.getElementById("searchString").value;
    alert("Clicking this would search for " + searchString + " on the page");
}


const TopHeader = () => {
    return (
        <nav className='top-header'>
            <a href="https://www.instagram.com/visualforma/">
                <img src={instagramwhite} alt="Instagram Icon" height="15" />
            </a>
            <a href="https://pt-pt.facebook.com/visualforma/">
                <img src={facebookwhite2x} alt="Small Facebook Icon" height="15" />
            </a>
            <div className="search">
                <input type="text" id="searchString"/>
                <div>
                    <img src={magnifiersearchwhite} alt="Search Magnifier" height="15" onClick={showSearchAlert}/>
                </div>
            </div>
        </nav>
    );
}

export default TopHeader;