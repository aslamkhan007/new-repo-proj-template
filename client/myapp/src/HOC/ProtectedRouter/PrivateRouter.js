import React from "react";
import { Redirect, Route } from 'react-router-dom';


export const PrivateRouter =({component:Component,...rest})=>{
 console.log("jjjjjjjjjjjjjjjjjjjj");
    return(
        <Route {...rest} render={(props)=>{
            const token =localStorage.getItem('token')
             console.log(token,"vvvvvvvvv");
            if(token){  
                return <Component {...props}/>
         
            }
            else{
                return <Redirect to={"/login"}/>
               
            }
        }}/>

    )
}