import "./VideoItem.css";
import React from "react";

const VideoItem = ({ video, onVideoSelect}) => {
  return (
    <div onClick={() => onVideoSelect(video) } className="item video-item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.default.url}
        alt=""
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
        <div className="description">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoItem;
