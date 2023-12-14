import s from "./chat.module.css";
import TextInput from "./TextInput";



const Chat = (props) => {


  return (
    <div className={s.chat}>
      <ul className={s.message__box}>
        {props.DATA_MESSAGES.map((message) => {
          return (
            <li key={Math.random().toString()}>
              <div className={s.message}>{message.message}</div>
            </li>
          );
        })}
      </ul>

      <TextInput
        addMessage={props.addMessage}
        onMessageChange={props.onMessageChange}
        newTextMessage={props.newTextMessage}
      />
    </div>
  );
};

export default Chat;
