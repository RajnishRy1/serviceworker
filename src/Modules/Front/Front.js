import  logo from './images/logo.png';
import dirtchip from './images/dirt-chip.png';
import addscreen from './images/addscreen.png';
import close from './images/close.png';


import './css/style.css';
import './css/bootstrap.min.css';

const Front=()=>{
    return(
        <div className="container">
        <div>
        <div className="row">
          <div className="col-sm-12">
            <img src={logo} width="30" height="47"/>  <img src={dirtchip} width="111" height="35"/>
          </div>
        </div>
        <div className="row">     
           <div className="col-sm-12 "> 
             <div className="main-wrap">
              <div className="row top-pad">
                 <div className="checkbox-wrap"><i className="fa fa-arrow-left right"></i></div>  
                <div className=" content-wrap"><h2>Scan Product</h2></div> 
              </div>
              <div id="addscreen" className="sidenav">
                <a href="#" id="add" data-bs-toggle="modal" data-bs-target="#exampleModal">Add to Home Screen &nbsp;<img src={addscreen} width="17" height="22"/></a>
               </div> 
{/* <!--Modal start--> */}
              <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-close">
                    <img src={close} data-bs-dismiss="modal" aria-label="Close" width="16" height="14"/>
                </div>
                    <div className="modal-content">
                        <div className="modal-header">
                          Add To Home Screen
                            
                        </div>
                        <div className="modal-body center">
                          <div className="modalicon">Icon</div>
                          <div className="modalcontent">Site Name</div>
                        </div>
                        <div className="modalbutton">
                          <a href="#"><button type="submit" className="btn modalbtn">Cancel</button></a>
                          <a href="#"><button type="submit" className="btn modalbtn">Add</button></a>
                        </div>
                    </div>
                </div>
            </div>
{/* <!--Modal End--> */}
                <div>
                  <div id="reader">
                    
                  </div>
                </div>

              <div className="content">
                  <p>Lorem Ipsum is simply dummy text <br/>
                of the printing and typesetting industry.</p> 
              </div>

              <div className="form-wrap"> 
               <form >
               <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1"> <span className="store form-control-icon" ></span></span>
                  </div>
                  <select className="form-select form-select-sm" >
                    <option >Select Store</option>
                   </select>
                </div>
                <div className="col-sm-12 center">
                  <a href="#"><button type="submit" className="btn mainbtn">Submit</button></a>
                </div>
               
              </form>
              </div>
            
             </div>
           </div>
           <div className="footer">
            Do you want to <a href="#">SIGN UP</a> <br/>
            for more <a href="#">BENEFITS</a>
          </div>


        </div>
      </div>
        </div>
    );
}

export default Front;