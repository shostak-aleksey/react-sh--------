// import dialogReducer from "./dialogReducer"


// let store = {
//   _state: {
//     Profile: {
//       posts: [
//         { id: 1, message: "hello", likes: 0 },
//         { id: 3, message: "hellooooooooo", likes: 0 },
//       ],
//       newPostText:'sasi Pisyu'
//     },
//     Messenger: {
//       people: [
//         {
//           way: "/message/id_0",
//           name: "Вася",
//         },
//         {
//           way: "/message/id_1",
//           name: "Игарь",
//         },
//         {
//           way: "/message/id_2",
//           name: "Света",
//         },
//         {
//           way: "/message/id_3",
//           name: "Ева",
//         },
//       ],
//       DATA_MESSAGES: [],
//     },
//   },

//   getState() {
//     return this._state
//   },

//   _rerenderHuender() {},

//   subscribe(observer) {
//     this._rerenderHuender = observer;
//   },

  

//   updateNewPostText(newText) {
//     this._state.Profile.newPostText = newText
//     this._rerenderHuender(this._state)
//   },
  
//   dispatch(action) {

//     this._state.Profile = dialogReducer(this._state.Profile, action)

//     this._rerenderHuender(this._state)
//   }
// }

// export default store;
