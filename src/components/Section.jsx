// === [ Section Component ] ===
// A reusable layout wrapper that applies padding, vertical guide lines, and optional decorative crosses.
// Props:
// - className: additional utility classes passed in
// - id: section ID for anchor linking
// - crosses: whether to display horizontal cross lines and SVG decoration
// - crossesOffset: optional top margin offset for cross lines
// - customPaddings: optional override for default vertical padding

import SectionSvg from "../assets/svg/SectionSvg";

// Functional component definition
const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    <>
      {/* Outer wrapper div with conditional padding and section ID */}
      <div
        id={id}
        className={`
        relative 
        ${
          customPaddings ||
          `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
        } 
        ${className || ""}`}
      >
        {/* Render child content inside the section */}
        {children}

        {/* Vertical guide lines on left and right (visible on medium+ screens) */}
        <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
        <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />

        {/* Conditional horizontal cross line and SVG decoration */}
        {crosses && (
          <>
            <div
              className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
                crossesOffset && crossesOffset
              } pointer-events-none lg:block xl:left-10 right-10`}
            />
            <SectionSvg crossesOffset={crossesOffset} />
          </>
        )}
      </div>
    </>
  );
};

export default Section;
