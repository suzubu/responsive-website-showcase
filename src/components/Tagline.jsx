// === [ Tagline Component ] ===
// Renders a horizontal line of content wrapped in decorative SVG brackets.
// Commonly used as a visual subheading or label in sections like Roadmap or Hero.
// Props:
// - className: additional utility classes passed to the wrapper div
// - children: text or elements displayed between the brackets
import brackets from "../assets/svg/Brackets";

// Functional component definition
const Tagline = ({ className, children }) => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {/* Left decorative bracket SVG */}
      {brackets("left")}
      {/* Tagline content passed as children */}
      <div className="mx-3 textn-3">{children}</div>
      {/* Right decorative bracket SVG */}
      {brackets("right")}
    </div>
  );
};

export default Tagline;
