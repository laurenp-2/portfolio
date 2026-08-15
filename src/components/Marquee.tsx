type MarqueeProps = {
  terms: string[];
};

export function Marquee({ terms }: MarqueeProps) {
  return (
    <p className="marquee" aria-label={`Areas of interest: ${terms.join(", ")}`}>
      {terms.map((term) => (
        <span className="marquee__item" key={term}>
          {term}
        </span>
      ))}
    </p>
  );
}
