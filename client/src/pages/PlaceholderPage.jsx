export default function PlaceholderPage({ title, description }) {
  return (
    <div className="page-content">
      <section className="welcome-row">
        <div>
          <div className="eyebrow">COMING SOON</div>
          <h1>{title}</h1>
          <p className="welcome-copy">{description}</p>
        </div>
      </section>
    </div>
  );
}
