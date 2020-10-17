import React,{useState} from "react";
import ProjectInput from "../../components/ProjectInput";
import {Card,Typography,CardContent} from "@material-ui/core"
import {Link} from "react-router-dom"
import Lottie from "react-lottie";
import animationData from "../../lotties/lf20_idfHDi.json";

export default function LogIn() {
  const [user,setUser]=useState({
    login:"",
    password:""
  })
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  let style = {
   main:{
    display: "flex",
    flexDirection:"column",
    alignItems:"center"  ,
    justifyContent:"center"
 },
   card:{
     padding:"5%",
     display:"flex",
     flexDirection:"column",
     justifyContent:"space-around",
     alignItems:"center",

    },
    forget:{
      fontSize:"smaller",
      color:"grey",
      
    }
  };
  const handleInputChange= e =>{
    let {name,value}=e.target;
    let userCpy={...user};
    userCpy[name]=value;
    setUser(userCpy)
  }
  return (
    <div style={style.main}>
      <Lottie options={defaultOptions} height={200} width={200} />
      <Card style={style.card}>
      <Typography align="center" display="block">Login </Typography>
      <CardContent style={style.card}>
      <ProjectInput
        name="login"
        type="text"
        value={user.login}
        placeholder="put something here"
        handler={handleInputChange}
        /> 
        <ProjectInput
        name="password"
        type="password"
        value={user.password}
        placeholder="put something here"
        handler={handleInputChange}
        /> 
      <Typography style={style.forget}>Forgot your password</Typography>
        
      </CardContent>
      <Link to={"/signup"}> don't have account yet ?</Link>
      </Card>
    </div>
  );
}
