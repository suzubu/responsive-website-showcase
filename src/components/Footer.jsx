// === [ Footer.jsx ] ===
// Renders the site footer with copyright text and social media icons.

import { socials } from "../constants";
import Section from "./Section";

// Component: Footer
// Uses the `Section` wrapper to layout footer content, including a year-based copyright
// and a set of circular icon buttons linking to social media.
const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        {/* Dynamic copyright line using current year */}
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All Rights Reserved.{" "}
        </p>
        {/* Social media icon list generated from `socials` constant */}
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            // Render each social link with an icon and hover styling
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

// Export Footer component for reuse in layout
export default Footer;
