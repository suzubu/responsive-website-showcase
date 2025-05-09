import { smallSphere, stars } from "../assets";
// === [ Pricing Component ] ===
// Displays the pricing section for the Brainwave product.
// Contains a decorative visual header, a pricing list, and a link to detailed pricing info.
import Section from "./Section";
import Heading from "./Heading";
import PricingList from "./PricingList";
import { LeftLine, RightLine } from "./design/Pricing";

// Component definition
const Pricing = () => {
  // === [ Section Wrapper ] ===
  // Container with ID "pricing" used for anchor navigation
  return (
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        {/* === [ Decorative Visuals (Large Screens Only) ] === */}
        {/* Renders a sphere and stars background behind the heading */}
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={255}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="stars"
            />
          </div>
        </div>
        {/* === [ Section Heading ] === */}
        <Heading
          tag="Get Started with Brainwave"
          title="Pay once, use forever"
        />
        {/* === [ Pricing List + Decorative Lines ] === */}
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>
        {/* === [ Call-to-Action Link ] === */}
        {/* Links to full pricing breakdown on a separate page */}
        <div className="flex justify-center mt-10">
          <a
            href="/pricing"
            className="text-xs font-code font-bold tracking-wider uppercase border-b"
          >
            See the full details.
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
