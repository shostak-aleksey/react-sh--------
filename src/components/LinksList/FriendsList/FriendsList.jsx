import s from './FriendsList.module.css'
import { NavLink } from "react-router-dom";

const FriendsList = () => {
    return (
      <div >
        <nav className={`${s.input} ${s.nav}`}>
          <ul className={s.ul}>
            <NavLink className={s.li} to="/Profile">
              Roma
              
            </NavLink>
            <NavLink className={s.li} to="/Messenger">
              Eva
            </NavLink>
            <NavLink className={s.li} to="/News">
              Elisa
            </NavLink>
            <NavLink className={s.li} to="/Setting">
              Mihalich
            </NavLink>
            <NavLink className={s.li} to="/Friends">
              Gena
            </NavLink>
          </ul>
        </nav>
      </div>
    );
}

export default FriendsList