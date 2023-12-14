import s from './PageImg.module.css'

const PageImg = (props) => {
    return (
      <div className={s.relative}>
        <img
          className={s.img}
          src="https://avatars.mds.yandex.net/get-mpic/4011308/img_id8983532602245502151.jpeg/orig"
          alt=""
        />
        <div className={s.avatar}>
          <img src={`${props.large}`} alt="" />
        </div>
        <div >{props.aboutMe}</div>
        <div >{props.lookingForAJob}</div>
        <div >{props.lookingForAJobDescription}</div>
        <div >{props.fullName}</div>
      </div>
    );
}

export default PageImg