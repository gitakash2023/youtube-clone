import React, { useContext, useEffect } from "react";
import { VideoCard } from "./VideoCard/VideoCard";
import MyContext from "@/components/MyContext/MyContext";

export const VideoList = () => {
  const { videos, loading, fetchMoreVideos, observerRef } =
    useContext(MyContext);
  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    if (entry.isIntersecting && !loading) {
      fetchMoreVideos?.();
    }
  };

  useEffect(() => {
    const options: IntersectionObserverInit = {
      root: null,
      rootMargin: "20px",
      threshold: 0.1,
    };

    observerRef.current = new IntersectionObserver(handleIntersection, options);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [observerRef]);
  return (
    <div className="flex flex-wrap gap-3 mb-64">
      {videos?.map((video) => (
        <div key={video.id.videoId}>
          <VideoCard video={video} />
        </div>
      ))}
      {loading && <p>Loading...</p>}
      <div
        ref={(element) => element && observerRef.current?.observe(element)}
        style={{
          height: "1px",
        }}
      />
    </div>
  );
};
