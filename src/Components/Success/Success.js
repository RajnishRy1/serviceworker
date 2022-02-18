import '../../css/style.css';
import thumb from '../../images/thumbs-up.png'

const Success = ()=>{
    return(
        <div className="col-sm-12">
            <div className="main-wrap">
                <div className="row">
                    <div className="col-md-12 ">
                        <div className="col-md-1"> <span className="backicon" ><i className="fa fa-arrow-left right"></i></span></div>
                        <div className="col-md-11"><h2> sign up</h2></div>
                    </div>
                    <div className="heading-wrap headtop"><h1> Congratulations</h1>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="message"><h4>Your account has been  <br />created successfully. </h4>
                    </div>
                    <div className="thumbsimg"><img src={thumb} alt="Congratulations" /></div>
                    <div className="message"><h4>Are you also a subscriber to  <br />our eAlert system to  <br />hear about local deals?
                    </h4>
                    </div>
                </div >
                <div className="col-sm-12 center">
                    <a href="#" > <button className="btn mainbtn  submit-button">If not, sign up now</button></a>
                </div>
                <div className="col-sm-12 center padding-b">
                    <a href="scan.html" ><button className="btn yellowbtn  submit-button" >Close</button></a>
                </div>
            </div >
        </div >
    );
}

export default Success;