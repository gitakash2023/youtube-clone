<<<<<<< HEAD
import React from "react";
import { VideoCard } from "./VideoCard/VideoCard";

export const VideoList = ({ videos }) => {
  return (
    <div className="flex flex-wrap gap-3 mb-60">
      {videos.map((video) => (
        <VideoCard video={video} />
      ))}
    </div>
  );
=======
import React from 'react'
import { VideoCard } from './VideoCard/VideoCard'
import { Video } from '@/types/videoType';

export const VideoList = ({ videos }: { videos: Video[] }) => {
  return (

    <div className="flex flex-wrap gap-3 mb-60">
      {videos.map((video) => (
        <div key={video.id.videoId}><VideoCard video={video} /></div>
      ))}
    </div>





  )
>>>>>>> 969c0955f4f160e9026cd4867d9943b284f1af87
};
