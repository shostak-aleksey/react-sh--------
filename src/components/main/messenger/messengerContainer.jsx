import { connect } from "react-redux";
import { addMessageCreator, updateNewMessageTextCreator } from "../../../redux/Reducers/messengerReducer";
import Messenger from "./messenger";


const mapStateToProps = (state) => {
  return {
    newTextMessage: state.Messenger.newTextMessage,
    DATA_MESSAGES: state.Messenger.DATA_MESSAGES,
    people: state.Messenger.people
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addMessage: () => {
      dispatch(addMessageCreator());
    },
    onMessageChange: (text) => {
      dispatch(updateNewMessageTextCreator(text));
    },
    onSubmit: (e) => {
      e.preventDefault();
    },
  };
};

const MessengerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Messenger);

export default MessengerContainer;
