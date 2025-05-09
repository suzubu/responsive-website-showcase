// === [ Heading Component ] ===
// A reusable layout block that displays a section heading with optional tagline and supporting text.
// Props:
// - className: additional utility classes to apply to the wrapper div
// - title: the main heading (rendered in h2)
// - text: optional paragraph beneath the title
// - tag: optional short label shown above the title via the Tagline component
import Tagline from "./Tagline";

// Functional component definition
const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {/* Render optional tagline if provided */}
      {tag && <Tagline className="mb-4 md:justify-center">{tag}</Tagline>}
      {/* Render heading if title exists */}
      {title && <h2 className="h2">{title}</h2>}
      {/* Render supporting text if provided */}
      {text && <p className="body-[2px] mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
