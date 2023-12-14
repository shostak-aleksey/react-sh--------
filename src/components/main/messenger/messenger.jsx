import { NavLink } from "react-router-dom";
import s from "./messenger.module.css";
import Chat from "./chat";
import sSideBar from "../../LinksList/sideBar/sideBar.module.css";

const Messenger = (props) => {

// debugger
  return (
    <div className={`${s.content} ${s.messenger} `}>
      <ul className={s.ul}>
        {props.people.map((chat) => {
          return (
            <li key={Math.random().toString()} className={sSideBar.li}>
              <img src="" alt="" />
              <NavLink className={`${s.li}  `} to={`${chat.way}`}>
                {chat.name}
              </NavLink>
              <div></div>
            </li>
          );
        })}
      </ul>
      <Chat
        addMessage={props.addMessage}
        onMessageChange={props.onMessageChange}
        newTextMessage={props.newTextMessage}
        DATA_MESSAGES={props.DATA_MESSAGES}
      />
    </div>
  );
};

export default Messenger;
