
import './App.css';
import {Grid, Container, Card, CardContent, makeStyles, Button} from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import {startScanner,stopScanner} from './Modules/html5qr';
import { Html5Qrcode } from 'html5-qrcode';
import { useHistory } from 'react-router-dom';
import './css/Card.css'
import Front from './Modules/Front/Front';

function Core() {
  const classes = useStyles();
  let obj =null;

  useEffect(()=>{
    startScanning();
  });

  const successCallback=(resText,Result)=>{
    var arr=resText.split("&");
    var code = arr[0].split("$");
    var code=1;

    stopScanning();

    //Redirect to URL with code
    // window.location.replace("/success/"+ code);
    let url="/product/"+ code;
    history.push(url);
    // ReactDOM.render(<Redirect to='/product/157589'/>,document.getElementById("reader"));
  }

  const history = useHistory();

  const startScanning=()=>{
    obj=new Html5Qrcode("reader");
    startScanner(obj,successCallback);
  }

  const scanNow=()=>{
    obj.resume();
  }

  const stopScanning=()=>{
    stopScanner(obj);
  }

  return (
    <Front/>
  );
}

const useStyles = makeStyles((theme)=>({
  container:{
    marginTop:10
  },
  title:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    background:'#3f51b5',
    color: '#fff',
    padding: 20
  }
}));

export default Core;
