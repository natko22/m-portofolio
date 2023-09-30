import React from "react";
import { Link } from "react-router-dom";
import myVideo from "../assets/videos/IMG_8114 2.MOV";
import video2 from "../assets/videos/joined_video_7682d226ff544778bac830cf87f2647c.MP4";
function Videos() {
  return (
    <div className="videos">
      <Link>www.ramarexclusive.com</Link>
      <video width="640" height="360" controls>
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Link>www.ramarexclusive.com</Link>

      <video width="640" height="360" controls>
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Videos;
