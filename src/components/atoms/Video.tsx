import React from "react";

type VideoProps = {
  src: string;
  ref: React.RefObject<HTMLVideoElement>;
};

const Video: React.FC<VideoProps> = ({ src, ref }) => {
  return (
    <>
      <video src={src} ref={ref} controls={false} />
    </>
  );
};

export default Video;
