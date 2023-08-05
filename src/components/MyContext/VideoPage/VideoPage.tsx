import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

const VideoPage: React.FC = () => {
  const searchParams = useSearchParams();

  const videoId = searchParams.get("v");
  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
      
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       
      ></iframe>
    </div>
  );
};

export default VideoPage;
