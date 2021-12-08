import React, { Component, useState, createRef, useEffect } from "react";
import "./chatcontent1.css";
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
        msg: "Hola.",
      },
      {
        key: 2,
        type: "other",
        msg: "Que tal!!!",
      },
      {
        key: 3,
        type: "other",
        msg: "Todo bien?",
      },
      {
        key: 4,
        type: "",
        msg: "Si, todo bien, lograste solucinar el bug?",
      },
      {
        key: 5,
        type: "other",
        msg: "Cual de todos?",
      },
      {
        key: 6,
        type: "",
        msg: "El que se entrega hoy!!",
      },
      {
        key: 7,
        type: "other",
        msg: "Ah, sip, todo quedó solucionado.",
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
              <p>Lucy S.</p>
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