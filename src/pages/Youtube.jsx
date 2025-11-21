import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Youtube.css";

export default function Youtube() {
  const [useFallback, setUseFallback] = useState(false);

  useEffect(() => {
    // Try loading YouTube. If it doesn’t load, show fallback.
    const timer = setTimeout(() => {
      setUseFallback(true);
    }, 3000); // 3-second timeout

    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      className="youtube-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="youtube-content">
        <h1 className="youtube-title">Video & Audio Editing</h1>
        <p className="youtube-text">
          Alongside voice acting, I also have a passion for video and audio editing. 
          I enjoy producing motion comic dubs and short-form projects that merge 
          storytelling, voice performance, and immersive sound design. 
          Here’s a sample reel showcasing my work in action:
        </p>

        <div className="youtube-player-wrapper">

          {/* Fallback: Local video */}
          {useFallback ? (
            <video
              className="youtube-player"
              controls
              autoPlay={false}
            >
              <source src="/videos/motionComicReel.mp4" type="video/mp4" />
              Your browser does not support video playback.
            </video>
          ) : (
            /* Default: YouTube iframe */
            <iframe
              className="youtube-player"
              src="https://www.youtube.com/embed/Ibw1X64EjLc"
              title="StudioJarvis Sample Reel"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              onError={() => setUseFallback(true)} // Immediate fallback if iframe errors
            ></iframe>
          )}

        </div>
      </div>
    </motion.section>
  );
}
