import React, { useEffect } from "react";
import { PrimaryButton } from "../atoms/Button";
import { VideoControls } from "@/hooks/useVideo";
import { formatTime } from "@/functions/timeConvert";

type VideoPlayerProps = {
  src: string;
  videoElement: React.RefObject<HTMLVideoElement>;
  videoControls: VideoControls;
  isPlay: boolean;
  currentTime: number;
  duration: number;
  handleTimeUpdate: () => void;
  handleLoadedData: () => void;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  videoElement,
  videoControls,
  isPlay,
  currentTime,
  duration,
  handleTimeUpdate,
  handleLoadedData,
}) => {
  const { play, pause, fastPlay } = videoControls;

  return (
    <div>
      <video
        src={src}
        ref={videoElement}
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={handleLoadedData}
        onLoadedMetadata={handleLoadedData}
      />
      <p>
        {formatTime(currentTime)}/{formatTime(duration)}
      </p>
      {isPlay ? (
        <PrimaryButton label="停止" handleClick={pause} />
      ) : (
        <PrimaryButton label="再生" handleClick={play} />
      )}
      <PrimaryButton label="早送り" handleClick={fastPlay} />
    </div>
  );
};

export default VideoPlayer;
