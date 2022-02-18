import '../../css/style.css'

const Cont=(props)=>{
    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0px";
     };
    const closeNavsub = () => {
        document.getElementById("subNav").style.width = "0";
     };
    return(
        <div className='bg-img'>
            <div className="mobile-wrapper mobileOnly sidenav" id="mySidenav" >
                <ul className="mobileStores">
                    <a href="#!" className="closebtn" onClick={closeNav}>&times;</a>
                    <li className="selectstore">Select a Store</li>
                    <li className="dirtcheap active"><a href="https://ilovedirtcheap.com/"><span className="icon"></span>Dirt Cheap</a></li>
                    <li className="treasurehunt"><a href="https://ilovetreasurehunt.com/"><span className="icon"></span>Treasure Hunt</a></li>
                    <li className="dirtcheapbuilding"><a href="https://ilovedirtcheapbuildingsupplies.com/"><span className="icon"></span>Dirt Cheap Building</a></li>
                </ul>
            </div>
            <div className="mobile-wrapper mobileOnly sidenav" >
                <ul className="mobileMenu sideSubnav" id="subNav" style={{zIndex:'2 !important'}}>
                    <a href="#!" className="closebtn" onClick={closeNavsub}>&times;</a>
                    <li className="first active"><a href="https://ilovedirtcheap.com/">Home</a></li>
                    <li><a href="https://ilovedirtcheap.com/about/">About</a></li>
                    <li><a href="https://ilovedirtcheap.com/whats-in-stores/">What's In Stores</a></li>
                    <li><a href="https://ilovedirtcheap.com/locations/">Locations</a></li>
                    <li><a href="https://ilovedirtcheap.com/careers/">Careers</a></li>
                    <li className="last"><a href="https://ilovedirtcheap.com/contact/">Contact</a></li>
                </ul>
            </div>
            <div className='container'>
                <div className='row'>
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default Cont;