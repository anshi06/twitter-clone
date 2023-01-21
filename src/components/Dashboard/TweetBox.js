import React from 'react'
import './TweetBox.css'
import { Button } from '@mui/material'
import { Avatar } from '@mui/material';
import { useState } from 'react';

function TweetBox({onCreate}) {
  const [tweetMessage, setTweetMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(tweetMessage);
    setTweetMessage("")
  };
  
  return (
    <div className='tweetBox'>
        <form>
        <div className = "tweetBox__input">
                    <Avatar
                        src = "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
                    />
                     <input 
                        onChange = {(e) => setTweetMessage(e.target.value)}
                        value = {tweetMessage} 
                        placeholder = "What's happening?" 
                        type = "text" 
                    />
        </div>
               <Button onClick={handleSubmit}
                className = "tweetBox__tweetButton">Tweet</Button> 
        </form>
    </div>
  )
}

export default TweetBox;
