
import './App.css';
import './css/Card.css';
import './css/style.css';
import React, { useEffect, useState } from 'react';

//Page Components
import Navlist from './Components/Navigation/Navlist';
import Storeselect from './Components/Storeselect/Storeselect';
import Footer from './Components/Footer/Footer';
import Cont from './Components/Container/Container';
import Scan from './Components/Scan/Scan';
import Pricecheck from './Components/Pricecheck/Pricecheck';
import Signup from './Components/SignUP/Signup';
import Loyalty from './Components/Loyalty/Loyalty';
import Terms from './Components/Terms/Terms';
import Profile from './Components/Profile/Profile';
import Editprofile from './Components/Profile/Editprofile';
import Success from './Components/Success/Success';

function Core() {
  // const classes = useStyles();  
  const setPageIndex=(pageIndex)=>{
    setIndex(pageIndex);
  }
  const pages=[
    <Storeselect setPageIndex={setPageIndex}/>,
    <Scan setPageIndex={setPageIndex}/>,
    <Pricecheck setPageIndex={setPageIndex} />,
    <Signup setPageIndex={setPageIndex}/>,
    <Success/>,
    <Profile/>,
    <Editprofile/>,
    <Terms/>,
    <Loyalty/>
  ]

  const [page,setPage] = useState(pages);
  const [index,setIndex] = useState(0);


  return (
    <Cont className="row">
      <Navlist/>
      {page[index]}
      <Footer/>
    </Cont>
  );
}



export default Core;
