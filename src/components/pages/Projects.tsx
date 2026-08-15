import { useState } from "react";
import { projectItems, researchItems, type ProjectLink, type ResearchItem } from "../../data/projects";

function isExternalLink(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function researchLinks(item: ResearchItem): ProjectLink[] {
  if (item.links.length > 0) return item.links;
  if (!item.tileHref) return [];
  return [{ label: item.tileHref.endsWith(".pdf") ? "research pdf" : "view project", href: item.tileHref }];
}

function chunk<T>(items: T[], size: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += size) rows.push(items.slice(i, i + size));
  return rows;
}

type TileItem = {
  id: string;
  title: string;
  status?: string;
  description: string;
  details: string[];
  tags: string[];
  links: ProjectLink[];
};

type ExpandingTileProps = {
  item: TileItem;
  openId: string | null;
  onToggle: (id: string) => void;
};

function ExpandingTile({ item, openId, onToggle }: ExpandingTileProps) {
  const isOpen = openId === item.id;
  const isCondensed = openId !== null && !isOpen;
  const stateClass = isOpen ? "is-open" : isCondensed ? "is-condensed" : "is-idle";
  const panelId = `tile-panel-${item.id}`;

  return (
    <article className={`research-entry ${stateClass}`}>
      <button
        className="research-tile"
        type="button"
        onClick={() => onToggle(item.id)}
        aria-expanded={isOpen}
        aria-controls={isOpen ? panelId : undefined}
      >
        <span className="research-tile__label">{item.title}</span>
      </button>
      {isOpen && (
        <div className="research-reveal" id={panelId} role="region" aria-label={`${item.title} details`}>
          {item.status && <p className="research-reveal__status">{item.status}</p>}
          <p className="research-reveal__description">{item.description}</p>
          <ul className="research-reveal__details">
            {item.details.map((detail) => <li key={detail}>{detail}</li>)}
          </ul>
          <p className="research-reveal__tags">{item.tags.join(" · ")}</p>
          {item.links.length > 0 && (
            <div className="research-reveal__links" aria-label={`${item.title} links`}>
              {item.links.map((link) => (
                <a
                  href={link.href}
                  key={link.href}
                  target={isExternalLink(link.href) ? "_blank" : undefined}
                  rel={isExternalLink(link.href) ? "noreferrer" : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      )}
    </article>
  );
}

export function Projects() {
  const [openResearchId, setOpenResearchId] = useState<string | null>(researchItems[0]?.id ?? null);
  const [openProjectId, setOpenProjectId] = useState<string | null>(projectItems[0]?.id ?? null);

  const toggleResearch = (id: string) => {
    setOpenResearchId((current) => (current === id ? null : id));
  };

  const toggleProject = (id: string) => {
    setOpenProjectId((current) => (current === id ? null : id));
  };

  const researchTiles: TileItem[] = researchItems.map((item) => ({
    id: item.id,
    title: item.title,
    status: item.status,
    description: item.description,
    details: item.details,
    tags: item.tags,
    links: researchLinks(item),
  }));

  const projectTiles: TileItem[] = projectItems.map((item) => ({
    id: item.id,
    title: item.title,
    description: item.description,
    details: item.details,
    tags: item.tags,
    links: item.links,
  }));

  const projectRows = chunk(projectTiles, 3);

  return (
    <div className="projects-page">
      <div className="projects-content">
        <section className="research-section" aria-labelledby="research-title">
          <h1 className="page-handwritten-heading" id="research-title">research</h1>
          <div className="research-grid">
            {researchTiles.map((item) => (
              <ExpandingTile item={item} key={item.id} openId={openResearchId} onToggle={toggleResearch} />
            ))}
          </div>
        </section>

        <section className="projects-section" aria-labelledby="projects-title">
          <h2 className="page-handwritten-heading" id="projects-title">projects</h2>
          {projectRows.map((row, rowIndex) => {
            const openIdInRow = row.some((item) => item.id === openProjectId) ? openProjectId : null;
            return (
              <div className="research-grid project-grid-row" key={rowIndex}>
                {row.map((item) => (
                  <ExpandingTile item={item} key={item.id} openId={openIdInRow} onToggle={toggleProject} />
                ))}
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
}

export default Projects;
