import React from "react";
import classes from "./VideoCard.module.scss";

interface VideoCardProps {
  video: {
    id: { videoId: string };
    snippet: {
      title: string;
      description: string;
      thumbnails: {
        medium: {
          url: string;
        };
      };
    };
  };
}
export const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <div className={classes.cardContainer} key={video.id.videoId}>
      <img
        src={video.snippet.thumbnails.medium.url}
        // alt={video.snippet.title}
        // width="100%"
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
  );
};
