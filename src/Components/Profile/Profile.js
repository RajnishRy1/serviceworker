import '../../css/style.css';
import edit from '../../images/edit.png';
import qr from '../../images/qr.png';
const Profile=()=>{
    return(
        <div className="col-sm-12"> 
             <div className="main-wrap">
              <div className="row"> 
                <div><h5>Alabama,  Montgomery Dirt Cheap </h5></div>
                <div className="checkbox-wrap"><i className="fa fa-arrow-left right"></i></div>
                <div className="heading-wrap"><h2>Profile <a href="edit_profile.html"><img src={edit} width="14" height="14" alt="Edit Profile" /></a></h2></div> 
               
              </div>
              <div className="qr"><img src={qr} /></div>
                <div className="row">
                        <div className="col-md-4"> </div> 
                        <div className="col-md-4 ">  
                          <div className="profile-wrap"><p>Name : Thomas  Hardison<br/>
                            Member Id : 12345</p></div>
                        </div>
                        <div className="col-md-4"></div>
                      </div>
                      <div className="top-pad-store"></div>
                      <div className="top-pad"></div>
                  </div>
               </div>
    );
};

// "images/edit.png"
export default Profile;