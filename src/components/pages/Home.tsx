import { Marquee } from "../Marquee";
import { profile } from "../../data/profile";

export function Home() {
  return (
    <section className="home-page page" aria-labelledby="home-page-title">
      <div className="home-page__hero">
        <h1 className="home-page__name" id="home-page-title">
          {profile.name.toLowerCase()}
        </h1>
        <p className="home-page__subtitle">
          {profile.heroLine} <span className="home-page__blank" aria-hidden="true" />
        </p>
      </div>
      <Marquee terms={profile.marqueeTerms} />
    </section>
  );
}
