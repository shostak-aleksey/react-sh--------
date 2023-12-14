import Btn  from "../../../UI/Btn";
import s from "./findFriends.module.css";
import flo from "../../../UI/img/цвяточек.jpg"; 
import { NavLink } from "react-router-dom";
const User = (props) => {


    
    return (
      <li className={s.li} key={props.user.id}>
        <NavLink to={`/findFriends/`+ props.user.id}>
          <img
            className={s.img}
            src={
              props.user.photos.small === null ? flo : props.user.photos.large
            }
            alt=""
          />
        </NavLink>
        <div>{props.user.status}</div>

        <div>
          {props.user.followed ? (
            <Btn>
              <div
                className={s.btn}
                onClick={() => {
                  props.unfollow(props.user.id);
                }}
              >
                unfollow
              </div>
            </Btn>
          ) : (
            <Btn>
              <div
                className={s.btn}
                onClick={() => {
                  props.follow(props.user.id);
                }}
              >
                follow
              </div>
            </Btn>
          )}
        </div>
        <p>{props.user.name}</p>
      </li>
    );
} 

export default User