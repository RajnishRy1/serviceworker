
import { Html5Qrcode } from "html5-qrcode";

var cameraID=null;

Html5Qrcode.getCameras()
.then(devices=>{
    if(devices && devices.length){
        cameraID=devices[0].id;
    }
})
.catch(err=>{
    console.log(err);
});

const startScanner = (obj,successCallback) =>{

    obj.start(
        {facingMode:"environment"},
        {fps:20,
        qrbox:{ width: 200, height: 200 },
        aspectRatio:1
        },
        successCallback
        ,
        (errorMessage)=>{
            // console.log(errorMessage);
        }
    )
    .then(()=>{
        obj.pause();
    })
    .catch(err=>{
        console.log(err);
    });
}

const stopScanner=(obj)=>{
    // let obj=new Html5Qrcode("reader");
    obj.stop()
    .then((ignore)=>{
    
    })
    .catch(err=>{
        console.log(err);
    });
}


export {startScanner, stopScanner};