import React from "react";
import "./Widgets.css";
import { TwitterTweetEmbed } from "react-twitter-embed";
// Simplest way to add Twitter Widgets to your react project.

import Search from "@mui/icons-material/Search";
import { useState } from "react";

function Widgets() {
  const tweetrs = [
    {
      tweetId: "1616524886201225217",
      name: "Elon Musk",
      content: "Use pinned Lists to improve your Twitter experience!",
    },
    {
      tweetId: "1615820298305118221",
      name: "Sundar Pichai",
      content:
        "Summary of great research progress on #GoogleAI, including language models, computer vision, multimodal models",
    },
    {
      tweetId: "1616610488858841088",
      name: "Anthony Albanese",
      content:
        "A good discussion with @BillGates on climate change, the future of jobs in renewable energy",
    },
    {
      tweetId: "1612952776933543936",
      name: "Kelvin Kelly",
      content:
        "We crave experts for the new thing but almost all experts are expert in the old thing.",
    },
    {
      tweetId: "1616613386426490880",
      name: "Joe Biden",
      content: "Republicans’ first 2 years vs. Democrats’ first 2 years.",
    },
  ];
  const [filterVal, setFilterVal] = useState("");
  const [data, setData] = useState(tweetrs);

  const handleFilter = (e) => {
    if (e.target.value === "") {
      setData(tweetrs);
    } else {
      const filterRes = data.filter((s) => {
        return s.name.match(e.target.value) || s.content.match(e.target.value);
      });
      setData(filterRes);
    }

    setFilterVal(e.target.value);
  };

  const tId = data.map((tw) => (
    <TwitterTweetEmbed key={tw.tweetId} tweetId={tw.tweetId} />
  ));
  return (
    <div className="widgets">
      <div className="widgets__input">
        <Search className="widgets__SearchIcon" />
        <input
          placeholder="Search Twitter"
          type="text"
          value={filterVal}
          onInput={(e) => handleFilter(e)}
        />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's Happening</h2>
        <div id="tweets">{tId}</div>
      </div>
    </div>
  );
}

export default Widgets;
