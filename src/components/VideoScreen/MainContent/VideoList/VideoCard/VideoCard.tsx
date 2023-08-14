import React, { useContext } from "react";
import classes from "./VideoCard.module.scss";
import { Video } from "@/types/videoType";
import { useRouter } from "next/navigation";

export const VideoCard = ({ video }: { video: Video }) => {
  const router = useRouter();

  const handleThumbnailClick = () => {
    router.push(`/watch?v=${video.id.videoId}`);
  };
  return (
    <div onClick={handleThumbnailClick}>
      <div className={classes.cardContainer} key={video.id.videoId}>
        <img
          src={video.snippet.thumbnails.medium.url}
          // alt={video.snippet.title}
          width="100%"
          className="rounded-lg "
        />
        <h3
          style={{
            width: "200px",
            whiteSpace: "nowrap",
            textAlign: "center",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontSize: "12px",
          }}
        >
          {video.snippet.title}
        </h3>
        <p
          style={{
            width: "200px",
            whiteSpace: "nowrap",
            textAlign: "center",
            overflow: "hidden",
            textOverflow: "ellipsis",
            fontSize: "12px",
          }}
        >
          {video.snippet.description}
        </p>
        
      </div>
    </div>
  );
};
