// === [ CompanyLogos.jsx ] ===
// Displays a row of company logos with a tagline, showcasing brands that use the product or service.

import { companyLogos } from "../constants";

// Props:
// - className: optional external class names for positioning/styling this section
const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      {/* Tagline introducing the logos section */}
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Helping people create beautiful content at
      </h5>
      {/* Horizontal list of company logos */}
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          // Render each logo with fixed dimensions and center alignment
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

// Export component for reuse
export default CompanyLogos;
