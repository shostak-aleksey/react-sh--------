import s from './Btn.module.css'

const Btn = (props) => {

    return (
        <button   className={s.btn__style}>
                    <span  className={s.text}>{props.children}</span>
        </button>
    )
}

export default Btn