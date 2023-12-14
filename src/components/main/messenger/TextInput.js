import s from "./TextInput.module.css"

const TextInput = (props) => {
    // const onAddMessage = () => {
    //   props.addMessage();
    // };

    // const textHandler = (event) => {
    //     const text = event.target.value
    //     props.onMessageChange(text);
    //     console.log('ffff')
    // }

  //     const newPostElement = React.createRef();

  // const addPost = () => {
  // props.addPost();
  // };

  // const onPostChange = () => {
  //   let text = newPostElement.current.value;
  //   props.updateNewPostText(text);
  // };

 const onAddMessage = () => {
   props.addMessage();
 };

 const onMessageChange = (e) => {
   let text = e.target.value;
   props.onMessageChange(text);
 };


    
    const messageSubmitHandler = (e) => {
        e.preventDefault()
    }
// debugger;
    return (
      <form className={s.form} onSubmit={messageSubmitHandler}>
        <input
          value={props.newTextMessage}
          onChange={onMessageChange}
          className={s.input}
          type="text"
        ></input>
        <button onClick={onAddMessage} type="submit" className={s.btn}>
          <img
            src="https://cdn1.iconfinder.com/data/icons/zlat-communication-vol-1/25/forward_arrow_share_send-1024.png"
            alt=""
          />
        </button>
      </form>
    );
}

export default TextInput