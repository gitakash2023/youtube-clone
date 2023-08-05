"useClient";
import React, {
  ReactElement,
  createContext,
  useRef,
  useEffect,
  useState,
} from "react";
import {
  getVideosByNextToken,
  searchByKeyword,
} from "@/services/youtubeService.ts/search";
import { Video } from "@/types/videoType";
interface MyContextProps {
  searchString?: string;
  setSearchString?: (s: string) => void;
  videos?: Video[];
  setVideos?: (a: Video[]) => void;
  handleSearch?: () => void;
  loading?: boolean;
  observerRef?: any;
  fetchMoreVideos?: () => void;
}
const MyContext = createContext<MyContextProps>({});

export const MyContextProvider = ({ children }: { children: ReactElement }) => {
  // states
  const [searchString, setSearchString] = useState<string>("");
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [nextToken, setNextToken] = useState<string>("");

  const observerRef = useRef<any>(null);

  //  function

  const handleSearch = async () => {
    setLoading(true);
    const { items, nextPageToken } = await searchByKeyword(searchString);
    setNextToken(nextPageToken);

    setVideos(items);
    setLoading(false);
  };
  const fetchMoreVideos = async () => {
    setLoading(true);

    const { items, nextPageToken } = await getVideosByNextToken(nextToken);
    setNextToken(nextPageToken);
    setVideos((prevData) => [...prevData, ...items]);
    setLoading(false);
  };

  return (
    <MyContext.Provider
      value={{
        searchString,
        setSearchString,
        videos,
        setVideos,
        handleSearch,
        loading,
        observerRef,
        fetchMoreVideos,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyContext;
