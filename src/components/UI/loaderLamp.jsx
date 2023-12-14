import s from './loaderLamp.module.css'

const Loader = (props) => {
    
    return <span className={s.loader}>{props.children}</span>
}

export default Loader