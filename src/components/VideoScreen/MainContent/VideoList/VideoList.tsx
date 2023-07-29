import React from 'react'
import { VideoCard } from './VideoCard/VideoCard'

export const VideoList = ({ videos }) => {
  return (

    <div className="flex flex-wrap gap-3 mb-60">
      {videos.map((video) => (
        <div key={video.id.videoId}><VideoCard video={video} /></div>
      ))}
    </div>





  )
};
