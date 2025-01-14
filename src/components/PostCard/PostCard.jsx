import { Link } from "react-router-dom";
import p from "./PostCard.module.css";

const Routes = {
  POST: '/post',
}

function PostCard(props) {
  const { title, body, id, dislikes} = props; 
  return (
    <div className={p.post} key={id}>
      <h1 className={p.PostCard_title}>{title}</h1>
      <p>{body}</p>
      <Link to={`${Routes.POST}/${id}`}>
        <span>Перейти к посту</span>
      </Link>
      <div className={p.badge}>
        <div className={p.badge}>
          <img
            src="https://img.icons8.com/?size=100&id=24816&format=png"
            alt="like icon"
          />
          <span>{props.likes}</span>
        </div>
        <div className={p.badge}>
          <img
            src="https://www.shareicon.net/data/2015/08/23/89841_f088_384x512.png"
            alt="dislike icon"
          />
          <span>{props.dislikes}</span>
        </div>
        <div className={p.badge}>
          <img
            src="https://tse4.mm.bing.net/th?id=OIP._3iP_uE1YUXtr42cK-_llAHaE8&pid=15.1 "
            alt="dislike icon"
          />
          <span>{props.views}</span>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
