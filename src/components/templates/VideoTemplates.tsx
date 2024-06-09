import React from "react";
import VideoPlayer from "../organisms/VideoPlayer";
import { VideoControls } from "@/hooks/useVideo";
import CardMol from "../molcules/Card/CardMol";

type VideoTemplatesProps = {
  videoUrl: string;
  videoElement: React.RefObject<HTMLVideoElement>;
  videoControls: VideoControls;
  isPlay: boolean;
  currentTime: number;
  duration: number;
  handleTimeUpdate: () => void;
  handleLoadedData: () => void;
};

const VideoTemplates: React.FC<VideoTemplatesProps> = ({
  videoUrl,
  videoElement,
  videoControls,
  isPlay,
  currentTime,
  duration,
  handleTimeUpdate,
  handleLoadedData,
}) => {
  return (
    <div>
      <p>これはサンプルビデオのページです。</p>
      <div className="grid gap-4 grid-cols-2 items-start">
        <VideoPlayer
          src={videoUrl}
          videoElement={videoElement}
          videoControls={videoControls}
          isPlay={isPlay}
          currentTime={currentTime}
          duration={duration}
          handleTimeUpdate={handleTimeUpdate}
          handleLoadedData={handleLoadedData}
        />

        <div className=" h-full bg-orange-200">
          <h2 className="font-bold">きりたんぽ物語</h2>
          <p>例えばこんな感じでレイアウトを作ります。</p>
        </div>

        <div className=" w-full h-24 bg-slate-400">
          ここにもorganismsを組み込んだり
        </div>

        <div className=" w-full h-24 bg-slate-400">
          ここにもorganismsを組み込んだり
        </div>

        <div>
          <CardMol />
        </div>
      </div>
    </div>
  );
};

export default VideoTemplates;
