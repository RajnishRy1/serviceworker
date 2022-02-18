import '../../css/style.css'
import addscreen from '../../images/addscreen.png'
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Storeselect = (props) => {

    //HOOKS
    const history=useHistory();
    useEffect(()=>{
        if(states.length==0){
            console.log("Calling...");
            fetch(storeLink)
            .then(response => response.json())
            .then(resp => {
                getStateList(resp.stores);
                setStores(resp.stores);
            })
            .catch(err=>{console.log(err);});
        }
    });



    //VARIABLES & CONSTANTS
    const storeLink="http://10.50.1.33:3002/api/store";
    var id=0;
    const data={
        stores: [
          {
            state:"Al",
            list: [
              {
                id: 102,
                name: "AL Store"
              },
              {
                id: 202,
                name: "AL Store"
              }
            ]
          },
          {
            state:"Fl",
            list: [
              {
                id: 302,
                name: "Some Store"
              },
              {
                id: 402,
                name: "Some Store"
              }
            ]
          }
        ]
      };     
    const [states,setStateslist]=useState([]); //states select list
    const [state,selectState]=useState(0);  //selected state
    const [store,setStore]=useState(0); //select store details
    var [storelist,setStoreList] = useState([]);  //store select list
    const [stores, setStores] = useState([]);   //list of all the stores
    


    //FUNCTIONS 
    function getStateList(stores) {
        for (let i = 0; i < stores.length; i++) {
            if(states.length==0){states.push(stores[i].state);}
            if(states.indexOf(stores[i].state)==-1){
                states.push(stores[i].state);
            }
        }
        setStores([...stores]);
        setStateslist([...states]);
    }

    function getStoreList(stores,state) {
        storelist=[];
        for (let i = 0; i < stores.length; i++) {
            if(stores[i].state==state)
                storelist.push({
                    id:stores[i].id,
                    name:stores[i].name
                });
        }
        setStoreList([...storelist]);
    }

    
    const stateChange=(event)=>{
        selectState(event.target.value);
        getStoreList(stores,event.target.value);
    };

    const storeChange=(event)=>{
        stores.forEach(element => {
            if(element.id==event.target.value){
                setStore([{
                    id:event.target.value,
                    name:element.name
                }]);
                id=element.id;
            }
        });
    };
    
    const setDetails=(id,storeName,state)=>{
        setStore([{
            id:id,
            name:storeName,
            state:state
        }])
    }

    const myFunc=()=>{
        if(store[0]!=undefined && state!=0){
            var data={
                id:store[0].id,
                storeName:store[0].name,
                state:state,
                stateList:states,
                storeList:storelist,
                stores:stores
            }
            const url="/scan";
            history.push(url,data);
        }
        else{
            alert("Please select store details!");
        }
    };
    
    const signUp=()=>{  
        props.setPageIndex(3);
    };

    return (
        <div className="col-sm-12">
            <div className="main-wrap">
                <div className="row top-pad-store">

                    <div className="heading-wrap"><h2>select store</h2></div>
                </div>
                <div id="addscreen" className="sidenav">
                    <a href="#" id="add" data-bs-toggle="modal" data-bs-target="#exampleModal">Add to Home Screen &nbsp;<img src={addscreen} width="17" height="22" /></a>
                </div>



                <div className="form-wrap">
                    <div>
                        <div className="input-group">
                            <select className='form-select form-select-sm' onChange={stateChange} value={state}>
                                <option value={""}>Select State</option>
                                {states.map((state)=><option key={state} value={state}>{state}</option>)}
                            </select>
                        </div>
                        <div className="input-group">
                            <select className='form-select form-select-sm'onChange={storeChange} disabled={state!=0?false:true}> 
                                <option value={""}>select store</option>
                                {storelist.map((store)=><option key={store.id} value={store.id}>{store.name}</option>)}
                            </select>
                        </div>
                    </div>

                        <div className="col-sm-12 center">
                            <button className="btn mainbtn" onClick={myFunc}>Next</button>
                        </div>
                        <div className="col-sm-12 center">
                            <button className="btn yellowbtn  submit-button" onClick={signUp}>Sign In</button>
                        </div>
                </div>
                <div className="top-pad-store"></div>
            </div>
        </div >
    )
}
// btn mainbtn  col-sm-12 submit-button

export default Storeselect;