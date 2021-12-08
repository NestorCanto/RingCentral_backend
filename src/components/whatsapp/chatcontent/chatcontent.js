import React, { Component, useState, createRef, useEffect } from "react";
import "./chatcontent.css";
import Avatar from "./avatar";
import ChatItem from "./chatitem";
import plane from '../../../../imgs/paper.png';
import clip from '../../../../imgs/clip.png';
<script src="https://kit.fontawesome.com/f26bf26b6f.js" crossOrigin="anonymous"></script>
export default class Chatcontent extends Component {
    messagesEndRef = createRef(null);
    chatItms = [
      {
        key: 1,
        type: "",
        msg: "Hola, ¿Como estás?",
      },
      {
        key: 2,
        type: "other",
        msg: "Bien, gracias.",
      },
      {
        key: 3,
        type: "other",
        msg: "Que tal tu?",
      },
      {
        key: 4,
        type: "",
        msg: "Todo bien por aquí.",
      },
      {
        key: 5,
        type: "other",
        msg: "Que bien,ya se te ocurrió algo?",
      },
      {
        key: 6,
        type: "",
        msg: "Algo de que?",
      },
      {
        key: 7,
        type: "other",
        msg: "De integrar Symphony",
      },
      {
        key: 8,
        type: "",
        msg: "Claro, ya tengo algunas ideas, solo queda plantearlas",
      },
    ];
  
    constructor(props) {
      super(props);
      this.state = {
        chat: this.chatItms,
        msg: "",
      };
    }
  
    scrollToBottom = () => {
      this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    };
  
    componentDidMount() {
      window.addEventListener("keydown", (e) => {
        if (e.keyCode == 13) {
          if (this.state.msg != "") {
            this.chatItms.push({
              key: 1,
              type: "",
              msg: this.state.msg,
            });
            this.setState({ chat: [...this.chatItms] });
            this.scrollToBottom();
            this.setState({ msg: "" });
          }
        }
      });
      this.scrollToBottom();
    }
    onStateChange = (e) => {
      this.setState({ msg: e.target.value });
    };
   
    //the RENDER method////
    render() {
      return (
        
        <div className="t">
        <div className="content__header">
          <div className="blocks">
            <div className="current-chatting-user">
              <Avatar
                isOnline="active"
               
              />
              <p>Nestor C.</p>
            </div>
          </div>

        </div>
        <div className="content__body">
          <div className="chat__items">
            {this.state.chat.map((itm, index) => {
              return (
                <ChatItem
                  animationDelay={index + 2}
                  key={itm.key}
                  user={itm.type ? itm.type : "me"}
                  msg={itm.msg}
                  image={itm.image}
                />
              );
            })}
            <div ref={this.messagesEndRef} />
          </div>
        </div>
     
        <div className="content__footer">
          <div className="sendNewMessage">
            <button className="addFiles">          
            <img src={clip}></img>
            </button>
            <input
              type="text"
              placeholder="Escribe tu mensaje"
              onChange={this.onStateChange}
              value={this.state.msg}
            />
            <button className="btnSendMsg" id="sendMsgBtn">
            <img src={plane}></img>
            </button>
            
          </div>
        </div>
      </div>
      );
    }
  }