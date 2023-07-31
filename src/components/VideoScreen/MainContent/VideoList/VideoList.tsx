import React, { useContext } from "react";
import { VideoCard } from "./VideoCard/VideoCard";
import MyContext from "@/components/MyContext/MyContext";

export const VideoList = () => {
  const { videos } = useContext(MyContext);
  return (
    <div className="flex flex-wrap gap-3 mb-60">
      {videos?.map((video) => (
        <VideoCard video={video} />
      ))}
    </div>
  );
};
