import { Avatar } from "@mui/material";
const Tweets = ({postId, name, username, text,  avatar}) =>{
    return (
        <div className="post">
        <div className="post__avatar">
          <Avatar src={avatar}/>
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {name}
                <span className="post__headerSpecial">@{username}</span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Tweets;