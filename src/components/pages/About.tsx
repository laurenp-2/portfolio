import { profile } from "../../data/profile";

export function About() {
  const hasPortrait = Boolean(profile.portraitSrc);

  return (
    <section className="about-page page" aria-labelledby="about-page-title">
      <div className="about-page__content">
        <figure className="about-page__portrait" aria-hidden={!hasPortrait}>
          <img
            alt={hasPortrait ? "Portrait of Lauren Pothuru" : ""}
            className="about-page__portrait-image"
            src={profile.portraitSrc ?? undefined}
          />
        </figure>
        <div className="about-page__copy">
          <h1 className="page-heading" id="about-page-title">about me</h1>
          {profile.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </div>
    </section>
  );
}
