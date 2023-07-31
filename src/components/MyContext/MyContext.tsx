"useClient";
import React, { ReactElement, createContext, useState } from "react";
import { searchByKeyword } from "@/services/youtubeService.ts/search";
import { Video } from "@/types/videoType";
interface MyContextProps{
    searchString?:string;
    setSearchString?:(s:string)=>void;
    videos?:Video[];
    setVideos?:(a:Video[])=>void;
    handleSearch?:()=>void;
}
const MyContext = createContext<MyContextProps>({});

export const MyContextProvider = ({ children }:{children:ReactElement}) => {
  const [searchString, setSearchString] = useState<string>("");
  const [videos, setVideos] = useState<Video[]>([]);

  const handleSearch = async () => {
    const data = await searchByKeyword(searchString);

    setVideos(data);
  };

  return (
    <MyContext.Provider
      value={{ searchString, setSearchString, videos, setVideos, handleSearch }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
