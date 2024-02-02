import React from "react";
const backgroundVideo = "./csuiters.mp4";
const VideoBackground = (props) => {
  return (
    <div className="video-background">
      <video
        autoPlay
        loop
        muted
        style={{
          position: "fixed",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content"></div>
    </div>
  );
};

export default VideoBackground;
