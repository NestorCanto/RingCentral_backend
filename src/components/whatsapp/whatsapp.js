import React from "react";
import * as ReactDOM from "react-dom";
import ChatBody from "./chatbody/chatbody";
import Chatcontent from "./chatcontent/chatcontent";
<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
import './whatsapp.css'
 



export default class Whatsapp extends React.Component{
render(){
    return(
          
     <div className="__main">
       <Chatcontent/>  
     </div>

           
    )          
}

}


