import '../../css/style.css'

const Signup = (props)=>{
    const myFunc=()=>{  
      props.setPageIndex(0);
    }

    return(
        <div className="col-sm-12"> 
             <div className="main-wrap">
                <div className="row"> 
                  <div  className="col-md-12 ">
                     <div className="col-md-1"> <span className="backicon" onClick={myFunc}><i className="fa fa-arrow-left right"></i></span></div> 
                     <div className="col-md-11"><h2> sign up</h2></div> 
                  </div>
                  <div className="heading-wrap headtop"><h2> sign up</h2></div> 
                </div>
                
                  <div className="form-wrap"> 
                  <form >
                    <div className="row">
                      <div className="col-md-6 col-sm-6 col-xs-6 ">   
                        <input type="text" className="form-control" placeholder="First Name*"  />
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6"> 
                        <input type="text" className="form-control" placeholder="Last Name*" />
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6">
                        <input type="text" className="form-control" placeholder="Email*" /> 
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6"> 
                        <input type="text" className="form-control" placeholder="Address1" />
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6"> 
                        <input type="text" className="form-control" placeholder="Address2" />
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6"> 
                        <input type="text" className="form-control" placeholder="City" />
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6"> 
                        <select className="form-select" >
                          <option selected>State* </option>
                          <option> State 1</option>
                          <option> State 2</option>
                        </select>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6"> 
                        <select className="form-select" >
                          <option selected>Country* </option>
                          <option> Country 1</option>
                          <option> Country 2</option>
                        </select>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6"> 
                        <input type="text" className="form-control" placeholder="Zip*"/>
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6"> 
                        <select className="form-select" >
                          <option selected>Favorite Store* </option>
                          <option> Store 1</option>
                          <option> Store 2</option>
                        </select>
                      </div>
                      <div className=" col-sm-6 col-xs-6"> 
                        <input type="text" className="form-control" placeholder="Password*"/>
                      </div>
                      <div className=" col-sm-6 col-xs-6"> 
                        <input type="text" className="form-control" placeholder="Confirm Password*"/>
                      </div>
                    </div>
                      
                    <div className="row">
                      <div className="col-md-12">
                        <div className="checkbox-wrap"><input type="checkbox" checked/></div> 
                        <div className="content-wrap">By clicking this you are allowing to store cookies</div>
                       
                      </div>
                      <div className="col-md-12">
                        <div className="checkbox-wrap"><input type="checkbox" checked/></div> 
                        <div className="content-wrap">Accept <a href="Terms.html">Terms & Conditions</a></div>  
                      </div>
                    </div>
                   <div className="col-sm-12 center">
                      <button className="btn mainbtn  submit-button" onClick={myFunc}>sign up</button>
                    </div>
                    </form>
                  </div>
                <div className="footer-text">Already have an account? <a href="#">Sign In</a> </div>
             </div>
           </div>
    );
}

export default Signup;