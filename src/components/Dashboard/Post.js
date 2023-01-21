import React, { useState } from "react";
import "./Post.css";
import { Avatar } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";


const Post = ({ postId, name, username, text,  avatar, onDelete, onUpdate }) => {
  console.log(avatar);
    const[updateForm, setUpdateForm] = useState(false);
    const[id, setId] = useState();
    const[tweet, setTweet] = useState("");
  const deleteHandler = (e) => {
    e.preventDefault();
    onDelete(postId);
  };

const handleEdit= (postId, text) =>{
    setUpdateForm(true);
    setId(postId);
    setTweet(text);
}
const handleEditSubmit = (e) =>{
    e.preventDefault();
   // console.log(tweet);
    onUpdate(id,tweet);
    setUpdateForm(false);
}
const editTexthandler =(e) =>{
    setId(postId);
    setTweet(e.target.value);
}

  return (
    <>
     {!updateForm && <div className="post">
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
      <div className="post__footer">
        <ChatBubbleOutlineIcon fontSize="small"/>
        <RepeatIcon fontSize="small" />
        
          <EditIcon
            fontSize="small"
            onClick={() => handleEdit(postId, text)}
          />
        <DeleteIcon onClick={deleteHandler} fontSize="small" />
      </div>
    </div>
  </div>}
  {updateForm && <div className="post">
    <div className="post__avatar">
      <Avatar src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50" />
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
          <input type="text" placeholder="what's happening !!!" value={tweet} onChange={editTexthandler}/>
        </div>
      </div>
      <button onClick={handleEditSubmit}>Update</button>
    </div>
  </div>}
  
    </>
   
    
  );
};

export default Post;
