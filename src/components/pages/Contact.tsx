import { profile } from "../../data/profile";

export function Contact() {
  return (
    <section className="contact-page page" aria-labelledby="contact-page-title">
      <div className="contact-page__content">
        <h1 className="page-heading" id="contact-page-title">stay in touch!</h1>
        <p className="contact-page__intro">{profile.contactIntro}</p>
        <dl className="contact-page__links">
          {profile.contactLinks.map(({ label, text, href, download }) => {
            const isExternal = href.startsWith("http");

            return (
              <div className="contact-page__link-row" key={label}>
                <dt>{label}</dt>
                <dd>
                  <a
                    download={download}
                    href={href}
                    rel={isExternal ? "noreferrer" : undefined}
                    target={isExternal ? "_blank" : undefined}
                  >
                    {text}
                  </a>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
