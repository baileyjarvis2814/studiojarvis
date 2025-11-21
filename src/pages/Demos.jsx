import "./Demos.css";
import studioSample from "../assets/audio/StudioSample.mp3";

export default function Demos() {
  const demos = [
    { title: "Studio Demo", file: studioSample },
    { title: "Commercial Demo(to be added)", file: "/audio/commercial.mp3" },
    { title: "Character Demo(to be added)", file: "/audio/character.mp3" },
    { title: "Narration Demo(to be added)", file: "/audio/narration.mp3" }
  ];

  return (
    <section className="demos-section">
      <h1 className="demos-title">Demo Reels</h1>
      <div className="demos-grid">
        {demos.map((demo) => (
          <div key={demo.title} className="demo-card">
            <h2 className="demo-card-title">{demo.title}</h2>
            <audio controls className="demo-audio">
              <source src={demo.file} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        ))}
      </div>
    </section>
  );
}
