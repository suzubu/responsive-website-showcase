// === [ Collaboration.jsx ] ===
// Renders the "Collaboration" section of the site, featuring a circular app orbit layout, content list, and supporting graphics.

// Assets (icons and symbols)
import { brainwaveSymbol, check } from "../assets";

// Content constants
import { collabApps, collabContent, collabText } from "../constants";

// Reusable layout components
import Section from "./Section";
import Button from "./Button";

// Decorative SVG components for this section
import { LeftCurve, RightCurve } from "./design/Collaboration";

// Component: Collaboration
// Displays a title, checklist, supporting description, and a graphic of app icons orbiting a central brainwave logo.
const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex justify-center">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8">
            AI Chat App for seamless collaboration
          </h2>
          {/* List of collaboration features with optional descriptions */}
          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-[2px] ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-[2px] mt-3 text-n-4  ">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
          <Button>Try it now</Button>
        </div>
        <div className="xl:w-[38rem] mt-4 mb-8">
          {/* Supporting paragraph text from `collabText` */}
          <p className="body-[2px] mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>

          {/* Circular layout containing orbiting app icons and center logo */}
          <div className="mt-4 relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>
            {/* Position each app icon in circular formation based on index */}
            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      src={app.icon}
                      alt={app.title}
                    />
                  </div>
                </li>
              ))}
            </ul>

            {/* Decorative SVG curves behind the circular icon layout */}
            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

// Export component for use in layout/page
export default Collaboration;
