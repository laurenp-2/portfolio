import { useState } from "react";
import { experienceGroups } from "../../data/experience";

export function Experience() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="experience-page page" aria-labelledby="experience-page-title">
      <h1 className="visually-hidden" id="experience-page-title">Experience</h1>
      <div className="experience-content">
        {experienceGroups.map((group) => {
          const groupHasOpenItem = group.items.some((item) => item.id === openId);

          return (
            <section className="experience-group" key={group.id} aria-labelledby={`${group.id}-label`}>
              <h2 className="experience-group__label" id={`${group.id}-label`}>{group.label}</h2>
              <div className="experience-group__rule" />
              <div className="experience-group__rows">
                {group.items.map((item) => {
                  const isOpen = item.id === openId;
                  const isCondensed = groupHasOpenItem && !isOpen;
                  const panelId = `${item.id}-details`;

                  return (
                    <article
                      className={`experience-row${isOpen ? " is-open" : ""}${isCondensed ? " is-condensed" : ""}`}
                      key={item.id}
                    >
                      <button
                        aria-controls={panelId}
                        aria-expanded={isOpen}
                        className="experience-row__trigger"
                        onClick={() => setOpenId(isOpen ? null : item.id)}
                        type="button"
                      >
                        <span className="experience-row__heading">
                          <span className="experience-row__organization">{item.organization}</span>
                          <span className="experience-row__role">{item.role}</span>
                          <span className="experience-row__date">{item.date}</span>
                        </span>
                      </button>
                      <div
                        aria-hidden={!isOpen}
                        className="experience-row__details"
                        id={panelId}
                      >
                        <div className="experience-row__details-inner">
                          <ul className="experience-row__bullets">
                            {item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                          </ul>
                          {item.tags.length > 0 && (
                            <div className="experience-row__tags" aria-label={`${item.organization} skills`}>
                              {item.tags.map((tag) => <span key={tag}>{tag}</span>)}
                            </div>
                          )}
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
