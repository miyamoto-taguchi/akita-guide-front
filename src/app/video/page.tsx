"use client";
import VideoTemplates from "@/components/templates/VideoTemplates";
import { useVideo } from "@/hooks/useVideo";
import React from "react";

const Page = () => {
  const {
    videoElement,
    videoControls,
    isPlay,
    currentTime,
    duration,
    handleTimeUpdate,
    handleLoadedData,
  } = useVideo();
  const videoUrl = "/滝の動画.mp4";

  return (
    <div>
      <VideoTemplates
        videoUrl={videoUrl}
        videoElement={videoElement}
        videoControls={videoControls}
        isPlay={isPlay}
        currentTime={currentTime}
        duration={duration}
        handleTimeUpdate={handleTimeUpdate}
        handleLoadedData={handleLoadedData}
      />
    </div>
  );
};

export default Page;
