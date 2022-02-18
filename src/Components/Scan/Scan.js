import React, { useEffect, useState } from 'react';
import { startScanner, stopScanner } from '../../Components/html5qr';
import { Html5Qrcode } from 'html5-qrcode';
import { useHistory, useLocation } from 'react-router-dom';
import close from '../../images/close.png'

const Scan = (props) => {

    //HOOKS
    const history = useHistory();
    useEffect(() => {
        startScanning();
    });

    //VARIABLES
    let obj = null;
    var location=useLocation();
    console.log('Rendering..');
    
    const [id,setId]=useState("");
    const [state,selectState] = useState("");
    const [states,selectStateList]=useState([]);
    const [storelist,setStoreList]=useState([]);
    const [stores,setStores] = useState("");
    const [store,setStore]=useState("");

    //FUNCTIONS    
    // if(location.state!=undefined){
    //     setId(location.state.id);
    //     selectState(location.state.state);
    //     selectStateList(location.state.stateList);
    //     setStoreList(location.state.storeList);
    //     setStores(location.state.stores);
    //     setStore(location.state.storeName);
    // }

    const stateChange=(event)=>{
        selectState(event.target.value);
        getStoreList(storelist,event.target.value);
    };

    function getStoreList(stores,state) {
        for (let i = 0; i < stores.length; i++) {
            if(stores[i].state==state)
                storelist.push({
                    id:stores[i].id,
                    name:stores[i].name
                });
        }
        setStoreList([...storelist]);
    }


    const storeChange=(event)=>{
        stores.forEach(element => {
            if(element.id==event.target.value){
                setId(element.id);
                setStore([{
                    id:event.target.value,
                    name:element.name
                }]);
            }
        });
    };

    const successCallback = (resText, Result) => {
        var arr = resText.split("&");
        var code = arr[0].split("$");
            var data={
                store_id:store[0].id,
                code:code[0],
                price:code[1]
            }
            stopScanning();
            let url = "/product";
            history.push(url,data);

    }

    const startScanning = () => {
        obj = new Html5Qrcode("reader");
        startScanner(obj, successCallback);
    }

    const scanNow = () => {
        if(store[0]!=undefined && state!=0){
            obj.resume();
        }
        else{
            alert("Please select store details!");
        }

    }

    const stopScanning = () => {
        stopScanner(obj);
    }
    const signUp = ()=>{
        props.setPageIndex(3);
    }

    const display=()=>{
            var content = document.getElementsByClassName('content')[0];  
              if (content.style.display === "block") {
                content.style.display = "none";
              } 
              else 
              {
              content.style.display = "block";
              }  
            }

    return (
        <div className="col-sm-12">
            <div className="main-wrap">
                <div className="">
                    <div className="collapsible" data-toggle="tooltip" onClick={display} title="Change Store">{store}, {state}<i className="fa fa-solid fa-angle-down" ></i></div>
                    <div className="content">
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-6 ">
                                <select className="form-select form-select-sm" onChange={stateChange} value={location.state!=undefined?location.state.state:""} >
                                    <option value={""}>Select State</option>
                                    {states.map((state)=><option key={state} value={state}>{state}</option>)}
                                </select>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-6">
                                <select className='form-select form-select-sm' onChange={storeChange} value={location.state!=undefined?location.state.id:""}>
                                    <option value={""}>select store</option>
                                    {storelist.map((store)=><option key={store.id} value={store.id}>{store.name}</option>)}
                                </select>
                            </div>
                        </div>
                        <div className="col-sm-12 center">
                            <button type="submit" className="btn mainbtn">save</button></div>
                    </div>
                </div>
                <div className="row">   <div className="heading-wrap"><h2>scan product</h2></div> </div>
                <div className="scan">
                    <div id="reader">

                    </div>
                </div>

                <div className="form-wrap">
                    <div className="col-sm-12 center">
                        <a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <button onClick={scanNow} className="btn mainbtn">scan now</button></a>
                    </div>
                </div>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby=" " aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-close">
                            <img src={close} alt="Close" data-bs-dismiss="modal" aria-label="Close" width="16" height="14" />
                        </div>
                        <div className="modal-content">
                            <div className="modal-body">
                                <div className="modalcontent">
                                    <img src="images/sad.png" alt="Sorry" /><br />
                                    <h3>Sorry!</h3>
                                    <p >Our prices are always changing <br />to give you the best deals! <br />Please ask an associate for assistance.</p>
                                    <div className="modalbutton">
                                        <button type="submit" data-bs-dismiss="modal" aria-label="Close" className="btn mainbtn">OK</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="top-pad"></div>
                <div className="footerlink">
                    Do you want to sign up<br></br>
                    for more benefits? 
                    {/* <a href="loyalty.html" onClick={signUp}> Click here</a> */}
                    <span onClick={signUp}> Click here</span>
                </div>
            </div>
        </div>
    );
}

export default Scan;