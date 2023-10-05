import React from "react";
import { Link } from "react-router-dom";
import myVideo from "../assets/videos/IMG_8114 2.MOV";
import video2 from "../assets/videos/joined_video_7682d226ff544778bac830cf87f2647c.MP4";
import previewImage1 from "../assets/preview-images/01.webp";
import previewImage2 from "../assets/preview-images/02.jpg";

function Videos() {
  return (
    <div className="videos">
      <a
        href="http://www.ramarexclusive.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        www.ramarexclusive.com
      </a>
      <video width="640" height="360" controls poster={previewImage1}>
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Link>Bride Preparation</Link>

      <video width="640" height="360" controls poster={previewImage2}>
        <source src={video2} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Videos;
