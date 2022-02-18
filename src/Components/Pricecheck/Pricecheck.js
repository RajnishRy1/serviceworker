
import off from '../../images/50off.png';
import '../../css/style.css';
import { useLocation } from "react-router-dom";
import { useState } from 'react';

const Pricecheck = (props) =>{

    //HOOKS
    var location = useLocation();

    //VARIABLES
    const link="http://10.50.1.33:3002/api/price";
    const [price,setRetailPrice]=useState();
    const [discountPrice,setDiscountPrice] = useState();
    var data={
        store_id: 400,
        stock2catID:35356,
        category: null
    };
    
    //FUNCTIONS
    fetch(link,{
        method:'POST',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    })
    .then(raw=>raw.json())
    .then((response)=>{
        console.log(response);  
    })
    .catch((err)=>{
      console.log(err);
    });

    const scanAgain=()=>{
        props.setPageIndex(1);
    }   
    const shareDeal=()=>{
        alert("Deal Shared!");
    };

    return(
        <div className="col-md-12">
            <div className="main-wrap">
                <div className="row">
                    <div><h5>Alabama,  Montgomery Dirt Cheap </h5></div>
                    <div className="checkbox-wrap"><i className="fa fa-arrow-left right"></i></div>
                    <div className="heading-wrap"><h2>Check Price</h2></div>
                    <div className="off col-md-12"><img src={off} width="200" height="199" alt="50% Off" />
                        <h3>Philips Viva Turbo Star Airfryer</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="row">
                        <div className="col-md-3"> </div>
                        <div className="col-md-6 ">
                            <div><span className="youpay">You Pay<br />
                                <span className="pay"> ${discountPrice}</span>
                            </span>

                                <span className="retailprice">Retail Price<br />
                                    <span className="retail"> ${price}</span>
                                </span>
                            </div>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>

                <div className="form-wrap">
                    <div className="col-sm-12 center">
                        <a href="scan.html" >
                            <button onClick={scanAgain} className="btn mainbtn">scan another item</button></a>
                    </div>
                    <div className="col-sm-12 center">
                        <button onClick={shareDeal} className="btn yellowbtn">share this deal</button>
                    </div>
                </div>

                <div className="top-pad">
                </div>
                <div className="footerlink">
                    Do you want to sign up<br />
                    for more benefits ? <a href="loyalty.html"> Click here</a>
                </div >
            </div >
        </div>
    );
}

export default Pricecheck;