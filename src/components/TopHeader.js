import './TopHeader.css';

function showSearchAlert() {
    const searchString = document.getElementById("searchString").value;
    alert("Clicking this would search for " + searchString + " on the page");
}


const TopHeader = () => {
    return (
        <nav className='top-header'>
            <a href="https://www.instagram.com/autarquia360/">
                <img src= "/img/instagramwhite.png" alt="Instagram Icon" height="15" />
            </a>
            <a href="https://www.facebook.com/Autarquia360/">
                <img src= "/img/facebookwhite2x.png" alt="Small Facebook Icon" height="15" />
            </a>
            <div className="search">
                <input id="searchString"/>
                <div>
                    <img src="/img/magnifiersearchwhite.png" alt="Search Magnifier" height="15" onClick={showSearchAlert}/>
                </div>
            </div>
        </nav>
    );
}

export default TopHeader;