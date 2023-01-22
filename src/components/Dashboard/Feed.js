import React, { useState } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import post from "../Images/post.png";
import post3 from "../Images/post3.png";
import post2 from "../Images/post2.png";
import profile from "../Images/profile.jpg";
import Tweets from "./Tweets";


// import axios from 'axios'

function Feed() {
  const posts = [
    {
      id: 1,
      name: "Alen Rif",
      username: "alenrif",
      text: "This is twitter clone not a real one build using ReactJs, HTML, CSS Only Hardcoded data is used to display the fake tweets.",
      avatarurl : post
    },
    {
      id: 2,
      name: "Olivia",
      username: "oliviaaa",
      text: "Fake Tweets don't have edit or delete button because it is assumed that these tweets are done by other users",
      avatarurl : post2
    },
    {
      id: 3,
      name: "George",
      username: "georgereece",
      text: "Those tweets which will be created by user which is on twitter login page only those tweets are ediatable and deletable",
      avatarurl : post3
    },
    {
      id: 4,
      name: "James",
      username: "jcharlie",
      text: "Right section is created using twitter tweet embeded which is react library and we can get tweets from twitter just via using twitter id",
      avatarurl : profile
    },
  ];
 
  const [results, setResults] = useState([]);

  // function getData() {
  //   axios.get("https://tweets.free.beeceptor.com/tweets/all")
  //   .then((res) => {
  //     setPosts(res.data.data) // array of posts
  //     setUsers(res.data.includes.users) // array of users
  //   })
  // }

  // useEffect(() => {
  //   getData();
  // },[]);

  // let res = users.map((user, i) => Object.assign({}, user, posts[i]));
  // setResults(res)

  const deletePost = (id) => {
    const updatedResult = results.filter((res) => {
      return res.id !== id;
    });
    setResults(updatedResult);
  };

  const createPost = (tweetMessage) => {
    const updatedResult = [
      {
        id: Math.round(Math.random() * 1000 + 1),
        name: "John Mark",
        username: "johncoder",
        text: tweetMessage,
        avatarurl: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
      },
      ...results,
    ];
    setResults(updatedResult);
  };

  const updatePost = (postId, tweet) => {
    console.log(results);
    const updatedResult = results.map((res) => {
      if (res.id === postId) {
        console.log(postId, res.id);
        console.log(JSON.stringify({ ...res, text: tweet }));
        return { ...res, text: tweet };
      }
      return res;
    });
    console.log(updatedResult);
    setResults(updatedResult);
    console.log(results);
  };

  const data = results.map((res) => {
    return (
      <Post
        key={res.id}
        postId={res.id}
        name={res.name}
        username={res.username}
        text={res.text}
        avatar={res.avatarurl}
        onDelete={deletePost}
        onUpdate={updatePost}
      />
    );
  });
  const tweetsFromOtherUsers = posts.map((post) => {
    return(
      <Tweets
      key={post.id}
      postId={post.id}
      name={post.name}
      username={post.username}
      text={post.text}
      avatar={post.avatarurl}
      />
    )
  })

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox onCreate={createPost} />
      {data}
      {tweetsFromOtherUsers}
    </div>
  );
}

export default Feed;
