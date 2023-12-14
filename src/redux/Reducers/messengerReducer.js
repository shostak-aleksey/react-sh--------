const ADD_MESSAGE = "MESSENGER-ADD-MESSAGE";

const UPDATE_NEW_MESSAGE_TEXT = "MESSENGER-UPDATE-NEW-MESSAGE-TEXT";

const initialState = {
  people: [
    {
      way: "/message/id_0",
      name: "Вася",
    },
    {
      way: "/message/id_1",
      name: "Игарь",
    },
    {
      way: "/message/id_2",
      name: "Света",
    },
    {
      way: "/message/id_3",
      name: "Ева",
    },
  ],
  DATA_MESSAGES: [{ id: 3, message: "text" }],
  newTextMessage: "sasi taxi",
};

const MessengerReducer = (state = initialState, action) => {
  if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    const stateCopy = { ...state };
    stateCopy.newTextMessage = action.text;

    return stateCopy;
  } else if (action.type === ADD_MESSAGE) {
    const stateCopy = { ...state };
    const text = stateCopy.newTextMessage;

    stateCopy.DATA_MESSAGES = [...state.DATA_MESSAGES];

    stateCopy.DATA_MESSAGES.push({
      id: 3,
      message: text,
    });
    stateCopy.newTextMessage = "";
    return stateCopy;
  }
  return state;
};

export const addMessageCreator = () => {
  return { type: ADD_MESSAGE };
};
export const updateNewMessageTextCreator = (text) => {
  return { type: UPDATE_NEW_MESSAGE_TEXT, text: text };
};

export default MessengerReducer;
