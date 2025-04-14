import "./style/Introduction.scss";
const Video = function () {
  return (
    <div className="intro-video">
      <video
        autoPlay
        loop
        muted
        playsInline
        controls
        className="background-video"
        onError={(e) => console.error("Błąd odtwarzania wideo:", e)}
      >
        <source src="/assets/HackerDen01.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default Video;
