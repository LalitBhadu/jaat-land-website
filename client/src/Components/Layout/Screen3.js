import "./screen.css";

const Screen3 = () => {
  return (
    <div className="screen3">
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/zpxBXYxQ2q8?autoplay=1&controls=1&mute=0&rel=0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="fullscreen-video"
        ></iframe>
      </div>
    </div>
  );
};

export default Screen3;
