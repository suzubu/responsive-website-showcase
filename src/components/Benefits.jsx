// === [ Benefits.jsx ] ===
// This component renders a "Benefits" section for the homepage, showcasing feature cards with interactive hover effects.

// Import constants and shared components
import { benefits } from "../constants";         // Array of benefit objects with text, image, icon, and styling info
import Heading from "./Heading";                 // Reusable section heading component
import Section from "./Section";                 // Wrapper component for consistent section styling/layout
import Arrow from "../assets/svg/Arrow";         // SVG arrow icon
import { GradientLight } from "./design/Benefits"; // Optional gradient overlay for specific cards
import ClipPath from "../assets/svg/ClipPath";   // SVG definition for clipped background effects

// Component: Benefits
// Renders a titled section with animated feature cards based on data from `benefits` constant.
const Benefits = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />

        <div className="flex flex-wrap gap-10 mb-10 justify-center">
          {benefits.map((item) => (
            // Render each benefit card with dynamic background and optional image overlay
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
              key={item.id}
            >
              {/* Foreground content with title, description, icon, and "Explore more" link */}
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-[2px] mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>

              {/* Conditionally render gradient light overlay if item.light is true */}
              {item.light && <GradientLight />}

              {/* Background container with clip path and optional hover image effect */}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              {/* Append the SVG clipPath definition used above (needed in the DOM) */}
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

// Export component for use in parent layout/page
export default Benefits;
