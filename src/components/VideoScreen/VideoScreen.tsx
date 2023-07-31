import React, { useEffect, useState } from "react";
import { Header } from "./Header/Header";
import { MainContent } from "./MainContent/MainContent";
import {
  searchByKeyword,
  getSuggestionList,
} from "@/services/youtubeService.ts/search";

export const VideoScreen = () => {
  const [searchString, setSearchString] = useState("");
  const [videos, setVideos] = useState([]);

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
