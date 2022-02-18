import './style.css'

const Navlist = () => {

    const openNav = () => { 
        document.getElementById("mySidenav").style.width = "250px";
    };
    const openNavsub = () => { 
        document.getElementById("subNav").style.width = "250px";
    };
    return (
            <header>
                <div id="mobile-header" className="mobileOnly">
                    <div className="row">
                        <div className="col-sm-12">
                            <ul className="mobileBar">
                                <li className="logo"><a href="#" onClick={openNav} >Dirt Cheap</a></li>
                                <li className="menu" id="content"><a href="#" onClick={openNavsub} >Menu</a></li>
                                <li className="locations"><a href="https://ilovedirtcheap.com/locations" >Locations</a></li>
                                <li className="scan"><a href="scan.html">Scan</a></li>
                                <li className="profile dropdown"><a href="#"> Profile</a>
                                    <div className="dropdown-content">
                                        <a href="#"> <img src="images/profile-details.png" className="profile-details" />Profile Details</a>
                                        <a href="#"><img src="images/signout.png" className="signout" />  Sign Out</a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
    )
}

export default Navlist;