import React, { useRef, useEffect } from 'react';

const VideoPlayer = ({ src, onPlayChange }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if(onPlayChange)
      onPlayChange(!video.paused)
  }, [onPlayChange, videoRef.current]);

  return (
    <video
      ref={videoRef}
      controls
      className="w-full"
      onError={(e) => console.error('Video error:', e.target.error)}
    >
      <source src={`${src}.webm`} type="video/webm" />
      <source src={`${src}.mp4`} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default VideoPlayer;
