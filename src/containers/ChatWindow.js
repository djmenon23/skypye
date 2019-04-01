import React from "react";
import store from "./../store/index";
import Header from './../components/Header';
import  Chats  from '../components/Chats';
import _ from 'lodash';
import MessageInput from "./MessageInput";

const ChatWindow = ({ activeUserId }) => {
const state = store.getState();
const { typing } = state;
const activeUser = state.contacts.contacts[activeUserId];
const messages = state.messages[activeUserId];
return (
<div className="ChatWindow">
<Header user={activeUser} />
<Chats messages={_.values(messages)} />
<MessageInput value={typing} />
</div>
);
};
export default ChatWindow;