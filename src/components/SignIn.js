import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';



  
function SignIn(){
 const [credential,setcredentials]=useState([]);
 let eventgetter=(event,index)=>{
setcredentials([
  ...credential.slice(0, index),
  event.target.value,
  ...credential.slice(index + 1),
]);
 }
const navigate=useNavigate();
let sendcredential=async()=>{
 await fetch('http://localhost:5000/credential',{
    method:"POST",
    headers:{"Content-Type": "application/json"},
    mode:"cors",
    body:JSON.stringify(credential)
  }).then(responce=>{
    if(responce.ok){
      console.log("ok")
      localStorage.setItem("admin","authorised")
   navigate("/crud")
      
    }
    else{
      console.log("not mathched")
      alert("username or password not matched")
    }
  })
}








  return (
    <div>
     
      <div className=' form3 '>
        
        
         <div className='username'>
          <input type="text" placeholder='username'  onChange={(e)=>eventgetter(e,0)} />
         </div>
         <div className='password'>
          <input type="password" placeholder='password'  onChange={(e)=>eventgetter(e,1)}/>
         </div>
         <div className='button'>
         <button onClick={sendcredential}  >login</button>
        
         </div>
         
        
      </div>
    
    </div>
  );
}

export default SignIn;

