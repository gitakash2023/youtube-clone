<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import { Header } from "./Header/Header";
import { MainContent } from "./MainContent/MainContent";
import {
  searchByKeyword,
  getSuggestionList,
} from "@/services/youtubeService.ts/search";
=======
import React, { useState } from 'react'
import { Header } from './Header/Header'
import { MainContent } from './MainContent/MainContent'
import { searchByKeyword } from '@/services/youtubeService.ts/search';
import { Video } from '@/types/videoType';
>>>>>>> 969c0955f4f160e9026cd4867d9943b284f1af87

export const VideoScreen = () => {
  const [searchString, setSearchString] = useState("");
  const [videos, setVideos] = useState<Video[]>([]);

  const handleSearch = async () => {
    const data = await searchByKeyword(searchString);

    setVideos(data);
  };
  

  return (
    <>
      <Header
        searchString={searchString}
        setSearchString={setSearchString}
        handleSearch={handleSearch}
      />
      <MainContent videos={videos} />
    </>
  );
};
