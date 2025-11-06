import "./Portfolio.css";

export default function Portfolio() {
  const works = [
    { title: "Game Trailer - Eclipse", role: "Narration", year: 2024 },
    { title: "Ad Campaign - Nova Energy", role: "Commercial VO", year: 2023 },
    { title: "Indie Animation - The Wanderer", role: "Character Voice", year: 2022 },
  ];

  return (
    <section className="portfolio-section">
      <h1 className="portfolio-title">Selected Works</h1>
      <div className="portfolio-list">
        {works.map((work) => (
          <div key={work.title} className="portfolio-item">
            <h2 className="portfolio-item-title">{work.title}</h2>
            <p className="portfolio-details">
              {work.role} • {work.year}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
