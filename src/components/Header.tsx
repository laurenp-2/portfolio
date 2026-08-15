import { Link, NavLink } from "react-router-dom";

const navigation = [
  { to: "/about", label: "About" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

type HeaderProps = {
  showWordmark: boolean;
};

export function Header({ showWordmark }: HeaderProps) {
  return (
    <header className={`site-header ${showWordmark ? "site-header--with-wordmark" : "site-header--home"}`}>
      {showWordmark && (
        <Link className="wordmark" to="/" aria-label="Lauren Pothuru home">
          <span>lauren</span>
          <span>pothuru</span>
        </Link>
      )}
      <nav className="primary-nav" aria-label="Primary">
        {navigation.map(({ to, label }) => (
          <NavLink
            className={({ isActive }) => `primary-nav__link${isActive ? " is-active" : ""}`}
            key={to}
            to={to}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
