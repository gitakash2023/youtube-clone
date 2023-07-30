import React, { useState } from 'react'
import { Header } from './Header/Header'
import { MainContent } from './MainContent/MainContent'
import { searchByKeyword } from '@/services/youtubeService.ts/search';
import { Video } from '@/types/videoType';

export const VideoScreen = () => {
  const [searchString, setSearchString] = useState("");
  const [videos, setVideos] = useState<Video[]>([]);

  const handleSearch = async () => {
    const data = await searchByKeyword(searchString);
  
    setVideos(data);
  };
  return (
    <>
    <Header searchString={searchString}  setSearchString={setSearchString} handleSearch={handleSearch}  />
    <MainContent videos={videos}/>
    </>

  )
}
