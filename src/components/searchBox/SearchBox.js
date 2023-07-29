import React, { useState, useEffect } from "react";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { searchByKeyword } from "@/services/youtubeService.ts/search";

const SearchBox = () => {
  const [searchString, setSearchString] = useState("");
  const [videos, setVideos] = useState([]);

  const handleSearch = async () => {
    const data = await searchByKeyword(searchString);
    console.log(data);
    setVideos(data);
  };

  return (
    <>
      <div className="flex h-10 mx-64 mt-8 ">
        <div>
          <input
            className="h-10"
            value={searchString}
            type="text"
            onChange={(e) => setSearchString(e.target.value)}
            placeholder="Enter searchString"
          />
        </div>
        <div className="p-4 bg-slate-100 rounded flex items-center">
          <SearchSharpIcon onClick={handleSearch} />
        </div>
      </div>
      {videos.map((video) => (
        <div key={video.id.videoId}>
          <h2 >{video.snippet.title}</h2>
          <p >{video.snippet.description}</p>
          <iframe
         
            src={video.snippet.thumbnails.medium.url}
            // alt={video.snippet.title}
          />
        </div>
      ))}
    </>
  );
};

export default SearchBox;
