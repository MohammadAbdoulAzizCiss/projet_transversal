import React,{useState} from "react";
import ProjectInput from "../../components/ProjectInput";
import {Card,Typography,CardContent,Step,Stepper,StepLabel,Button} from "@material-ui/core"
import {Link} from "react-router-dom"
import Axios from "axios"
import {useHistory} from "react-router-dom"
import {patient} from "../../misc/endpoints"

export default function SignUp() {
  const history=useHistory()
  const [user,setUser]=useState({
    nom:"",
    prenom:"",
    CIN:"",
    mail:"",
    numTel:"",
    telFixe:"",
    addresse:"",
    username:"",
    password:""

  });
  const [active,setActive]=useState(0)
  const steps=["patient infos","account infos"]
  const handleNext=()=>{
    active===1?
    sendData()
    :setActive(1)
  }
  const sendData=()=>{
    Axios.post(patient,user).then(patient=>
    history.push("/login",patient)
    ).catch(error=>error)
  }
  const handleBack=()=>{
    setActive(0)
  }
  const displayFields=(toggler)=>(
    toggler===0?
    <>
      <ProjectInput required={true} name={"nom"} placeholder={"nom"} handler={handleInputChange} value={user.nom}/>
      <ProjectInput required={true} name={"prenom"} placeholder={"prenom"} handler={handleInputChange} value={user.prenom}/>
      <ProjectInput required={true} name={"CIN"} placeholder={"CIN"} handler={handleInputChange} value={user.CIN}/>
      <ProjectInput required={true} name={"mail"} placeholder={"mail"} handler={handleInputChange} value={user.mail}/>
      <ProjectInput required={true} name={"numTel"} placeholder={"numTel"} handler={handleInputChange} value={user.numTel}/>
    </>:
    <>
    <ProjectInput required={true} name={"numFixe"} placeholder={"numFixe"} handler={handleInputChange}  value={user.telFixe}/>
    <ProjectInput required={true} name={"addresse"} placeholder={"addresse"} handler={handleInputChange} value={user.addresse}/>
      <ProjectInput required={true} name={"username"} placeholder={"username"} handler={handleInputChange} value={user.username}/>
      <ProjectInput required={true} name={"password"} placeholder={"password"}  type={"password"} handler={handleInputChange} value={user.password}/>
    </>)
  
  
  let style = {
    main:{
     display: "flex",
     flexDirection:"column",
     alignItems:"center"  ,
     justifyContent:"center"
  },
    card:{
      flex:"1",
      padding:"5%",
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-around",
      alignItems:"center",
 
     },
     forget:{
       fontSize:"smaller",
       color:"grey",
       
     },
     root:{width:"50%"},
     central:{
       display:"flex",
       flexDirection:"row",
       justifyContent:"space-around"
     }
   };
   const handleInputChange= e =>{
     let {name,value}=e.target;
     let userCpy={...user};
     userCpy[name]=value;
     setUser(userCpy)
   }
  return <div style={style.main}>
   <div style={style.root}>
   <Stepper activeStep={active}>
      {steps.map(label=><Step key={label}>
      <StepLabel>{label}</StepLabel>
      </Step>)}
    </Stepper>
   </div >
   
    <Card style={style.card}>
      <Typography>Sign Up</Typography>
      <CardContent style={style.card}>
        
       {displayFields(active)}
      </CardContent>
     <div>
     <Button
      disabled={ active===0 }
      children="back"
      onClick={handleBack}
      />
      <Button
      children={active===1?"sign up":"next"}
      onClick={handleNext}
      />
     </div>
      {active===0? 
      <Link style={{fontSize:"smaller"}} to={"/login"}>already have an account?</Link>:null}

      
    </Card>
  </div>;
}
