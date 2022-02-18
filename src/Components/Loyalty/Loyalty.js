import '../../css/style.css';
import loyalty from '../../images/loyalty.png';

const Loyalty=()=>{
    return(
        <div className="col-sm-12"> 
             <div className="main-wrap">
                <div className="row"> 
                  <div  className="col-md-12 ">
                     <div className="col-md-1"> <span className="backicon" ><i className="fa fa-arrow-left right"></i></span></div> 
                     <div className="col-md-11"><h2> sign up</h2></div> 
                  </div>
                  <div className="heading-wrap headtop"><h2> new Loyalty program  <br/>
                    coming soon</h2>
                  </div> 
                </div>
                <div className="col-md-12">
                  <div className="loyaltyimg"><img src={loyalty} alt="New Loyalty Program " /></div>
                  <div className="message"><h4>We are preparing the launch of our <br/>
                    New Customer Loyalty Program so <br/>click below to be among the first to <br/>learn the details !</h4>
                  </div>
                </div>
          <div className="col-sm-12 center padding-b">
           <a href="signup.html"><button className="btn mainbtn  submit-button">sign up New</button></a>
          </div>
          </div>
        </div>
    );
};

export default Loyalty;