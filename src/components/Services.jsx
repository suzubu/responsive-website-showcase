// === [ Services Component ] ===
// Renders a section with three AI-powered service demos: Smartest AI, Photo Editing, and Video Generation.
// Includes rich visual layouts, image overlays, animated UI elements, and responsive layouts.
import Section from "./Section";
import Heading from "./Heading";
import { service1, service2, service3, check } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "../constants";
import Generating from "./Generating";
import {
  PhotoChatMessage,
  Gradient,
  VideoBar,
  VideoChatMessage,
} from "./design/Services";

// Component definition
const Services = () => {
  return (
    <>
      {/* Section wrapper with anchor ID for navigation */}
      <Section id="how-to-use">
      <div className="container">
        {/* Section heading with title and description */}
        <Heading
          title="Generative AI made for creators"
          text="Brainwave unlocks the potential of AI-powered applications"
        />

        <div className="relative">
          {/* === [ Smartest AI Card ] === */}
          <div className="relative z-1 flex items-center h-[39rem] mb-5 p-8 border border-n-1/10  rounded-3xl overflow-hidden lg:p-20 xl:h-[46rem]">
            {/* Background image (Smartest AI) */}
            <div className="absolute top-0 left-0   h-full pointer-events-none md:3/5 xl:w-auto">
              <img
                className="w-full h-full object-cover md:object-right"
                width={800}
                height={730}
                src={service1}
                alt="Smartest AI"
              />
            </div>
            {/* Text and feature list for Smartest AI */}
            <div className="relative z-1 max-w-[17rem] ml-auto">
              <h4 className="h4 mb-4">Smartest AI</h4>
              <p className="body-[2px] mb-3[rem] text-n-3">
                Brainwave unlocks the potential of AI-powered applications
              </p>
              {/* Feature list pulled from brainwaveServices constant */}
              <ul className="body-[2px]">
                {brainwaveServices.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start py-4 border-t border-n-6"
                  >
                    <img src={check} width={24} height={24} />
                    <p className="ml-4">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Animated overlay component */}
            <Generating className="absolute left-4 right-4 bottom-4 border-n-1/10 border lg:left-1/2 lg:right-auto lg:bottom-8 lg:-translate-x-1/2" />
          </div>
          {/* === [ Photo Editing and Video Generation Cards ] === */}
          <div className="relative z-1 grid gap-5 lg:grid-cols-2">
            <div className="relative min-h-[39rem] border border-n-1/10 rounded-3xl overflow-hidden">
              {/* Background image for photo editing */}
              <div className="absolute inset-0">
                <img
                  src={service2}
                  className="h-full w-full object-cover"
                  width={630}
                  height={750}
                  alt="robot"
                />
              </div>
              {/* Text overlay with title and description */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-b from-n-8/0 to-n-8/90 lg:p-15">
                <h4 className="h4 mb-4">Photo Editing</h4>
                <p className="body-[2px] mb-3[rem] text-n-3">
                  Automatically enhance your photos using our AI app&apos;s
                  photo editing featrue. Try it now!
                </p>
              </div>
              <PhotoChatMessage />
            </div>
            <div className="p-4 bg-n-7 rounded-3xl overflow-hidden lg:min-h-[46rem]">
              <div className="py-12 px-4 xl:px-8">
                <h4 className="h4 mb-4"> Video Generation</h4>
                <p className="body-[2px] mb-[2rem] text-n-3">
                  The world&apos;s most powerful AI photo and video art
                  generation engine. What will you create?
                </p>
                {/* Icon features related to video generation */}
                <ul className="flex items-center justify-between">
                  {brainwaveServicesIcons.map((item, index) => (
                    <li
                      key={index}
                      className={`rounded-2xl flex items-center justify-center ${
                        index === 2
                          ? "w-[3rem] h-[3rem] p-0.25 bg-conic-gradient md:w-[4.5rem] md:h-[4.5rem]"
                          : "flex w-10 h-10 bg-n-6 md:w-15 md:h-15 "
                      }`}
                    >
                      <div
                        className={
                          index === 2
                            ? "flex items-center justify-center w-full h-full bg-n-7 rounded-[1rem]"
                            : ""
                        }
                      >
                        {/* Icon image */}
                        <img src={item} width={24} height={24} alt={item} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Video preview area with chat UI and video bar */}
              <div className="relative h-[20rem] bg-n-8 rounded-xl overflow-hidden md:h-[25rem]">
                <img
                  src={service3}
                  className="w-full h-full object-cover"
                  width={520}
                  height={400}
                  alt="Scary Robot"
                />
                <VideoChatMessage />
                <VideoBar />
              </div>
            </div>
          </div>
          {/* Gradient background decoration */}
          <Gradient />
        </div>
      </div>
      </Section>
    </>
  );
};

export default Services;
