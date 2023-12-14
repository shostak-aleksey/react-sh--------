import logo from '../../logo.svg'
import s from './header.module.css'
// import Logo2 from '../UI/loader'


const Header = () => {
    return (
      <header className={s.header}>
        <div className={`${s.logo}`}>
          <img src={logo} className={`${s.logo}${s.absolute}`} alt="logo" />

          {/* <Logo2 /> */}
        </div>
      </header>
    );
}


export default Header