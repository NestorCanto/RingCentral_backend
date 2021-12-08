import React from "react";

import Chatcontent from "./chatcontent/chatcontent";
import './messenger.css'
export default class Messenger extends React.Component{
render(){
    return(           
     <div className="__main">
        <Chatcontent/>
   </div>               
    )          
}

}