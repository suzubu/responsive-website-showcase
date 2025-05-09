// === [ Roadmap Component ] ===
// Displays a visual timeline of past and upcoming features using cards.
// Pulls data from the `roadmap` constant.
// Each card includes:
// - A date and status (done/in progress)
// - An image, title, and description
// - Decorative grid and gradient elements
import Section from "./Section";
import Heading from "./Heading";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import Tagline from "./Tagline";
import { Gradient } from "./design/Roadmap";
import Button from "./Button";

// Component definition
const Roadmap = () => {
  return (
    // === [ Section Wrapper ] ===
    // Container with section ID and overflow control
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10 ">
        {/* Section heading with optional tagline and title */}
        <Heading tag="Ready to get started?" title="What we've working on" />
        {/* === [ Grid of Roadmap Items ] === */}
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            // Determine if item is done or in progress
            const status = item.status === "done" ? "Done" : "In progress";

            return (
              <>
                {/* Card body with visual styling and layout */}
                <div
                  key={item.id}
                  className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                    item.colorful ? "bg-conic-gradient" : "bg-n-6"
                  }`}
                >
                  <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                    {/* Decorative background grid */}
                    <div className="absolute top-0 left-0 max-w-full">
                      <img
                        src={grid}
                        className="w-full"
                        width={550}
                        height={550}
                        alt="grid"
                      />
                    </div>
                    <div className="relative z-1">
                      {/* Top row with date and status indicator */}
                      <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                        <Tagline>{item.date}</Tagline>
                        <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                          <img
                            src={item.status === "done" ? check2 : loading1}
                            className="mr-2.5w"
                            width={16}
                            height={16}
                            alt={status}
                          />
                          <div className="tagline">{status}</div>
                        </div>
                      </div>
                      {/* Main illustrative image for the roadmap item */}
                      <div className="mb-10 -my-10 -mx-15 ">
                        <img
                          src={item.imageUrl}
                          className="w-full"
                          width={630}
                          height={420}
                          alt={item.title}
                        />
                      </div>
                      {/* Title of the roadmap feature */}
                      <h4 className="h4 mb-4">{item.title}</h4>
                      {/* Description text of the roadmap feature */}
                      <p className="body-[2px] text-n-4">{item.text}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

          {/* Background gradient decoration element */}
          <Gradient />
        </div>
        {/* Bottom call-to-action button linking to the roadmap page */}
        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="/roadmap">Our roadmap</Button>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
