import React from 'react'
import { VideoList } from './VideoList/VideoList'

export const MainContent = ({videos}) => {
  return (
    <div><VideoList videos={videos}/></div>
  )
}
