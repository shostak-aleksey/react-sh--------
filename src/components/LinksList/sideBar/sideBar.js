import { NavLink } from "react-router-dom"
import s from "../sideBar/sideBar.module.css"



const SideBar = () => {
    return (
      <nav className={s.nav}>
        <ul className={s.ul}>
          <NavLink className={s.li} to="/Profile">
            Profile
          </NavLink>
          <NavLink className={s.li} to="/Messenger">
            Massage
          </NavLink>
          <NavLink className={s.li} to="/News">
            News
          </NavLink>
          <NavLink className={s.li} to="/Setting">
            Setting
          </NavLink>
          <NavLink className={s.li} to="/findFriends">
            Friends
          </NavLink>
          <NavLink className={s.li} to="/Friends">
            Find friends
          </NavLink>
        </ul>
      </nav>
    );
}


export default SideBar