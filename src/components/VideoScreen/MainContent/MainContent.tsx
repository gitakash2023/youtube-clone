import React from 'react'
import { VideoList } from './VideoList/VideoList'
import { Video } from '@/types/videoType'

export const MainContent = ({ videos }: { videos: Video[] }) => {
  return (
    <div><VideoList videos={videos} /></div>
  )
}
