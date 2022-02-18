import '../../css/style.css';

const Editprofile=()=>{
    return(
        <div className="col-sm-12"> 
             <div className="main-wrap">
              <div className="row"> 
                <div><h5>Alabama,  Montgomery Dirt Cheap </h5></div>
                <div className="checkbox-wrap"><i className="fa fa-arrow-left right"></i></div>
                <div className="heading-wrap"><h2>Edit Profile</h2></div> 
              </div>
                
              
              <div className="form-wrap"> 
                  <form >
                    <div className="row">
                      <div className="col-md-6 col-sm-6 col-xs-6 ">   
                        <input type="text" className="form-control" placeholder="Thomas"  />
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6"> 
                        <input type="text" className="form-control" placeholder="Hardison" />
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6">
                        <input type="text"  disabled className="form-control" placeholder="thomas.hardison@yahoo.com" /> 
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6"> 
                        <input type="text" className="form-control" placeholder="251 S. Lawrence Street" />
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6"> 
                        <input type="text" className="form-control" placeholder="Address2" />
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6"> 
                        <input type="text" className="form-control" placeholder="Montgomery" />
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6"> 
                        <input type="text" className="form-control" placeholder="Alabama" />
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6"> 
                        <input type="text" className="form-control" placeholder="United States" />
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6"> 
                        <input type="text" className="form-control" placeholder="36104" />
                      </div>
                      <div className="col-md-6 col-sm-6 col-xs-6"> 
                        <input type="text" className="form-control" placeholder="36104" />
                      </div>
                      <div className=" col-sm-6 col-xs-6"> 
                        <input type="text" className="form-control" placeholder="Password*" />
                      </div>
                      <div className=" col-sm-6 col-xs-6"> 
                        <input type="text" className="form-control" placeholder="Alabama Montgomery Dirt Cheap" />
                      </div>
                    </div>
                   
                    <div className="row">
                      <div className="col-md-12">
                        <div className="col-sm-12 center">
                          <button className="btn yellowbtn  submit-button" onclick='myFun();'>change password</button>
                       
                        </div>
                        <div className="col-md-12 center">
                          <button className="btn mainbtn  submit-button" onclick='myFun();'>Save details</button>
                        </div>
                      </div>
                    </div>
                  </form>
                  </div>
                <div className="footer-text">Already have an account? <a href="#">Sign In</a> </div>
              </div>
           </div>
    );
}

export default Editprofile;