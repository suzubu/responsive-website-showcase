// === [ PricingList Component ] ===
// Renders a grid/list of pricing tiers based on the `pricing` constant.
// Each card includes:
// - Title and description
// - Price or contact prompt
// - CTA button (Get Started or Contact Us)
// - List of included features with check icons
import React from "react";
import { pricing } from "../constants";
import Button from "./Button";
import { check } from "../assets";

// Functional component definition
const PricingList = () => {
  return (
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {/* Loop through each pricing tier and render a styled card */}
      {pricing.map((item, index) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even: py-14 odd:py-8 odd:my-6 "
        >
          {/* Pricing tier title styled based on index (color variant) */}
          <h4
            className={`h4 mb-4 ${
              index === 0 ? "text-2" : index === 1 ? "text-1" : "text-3"
            }`}
          >
            {item.title}
          </h4>

          {/* Optional description beneath the title */}
          <p className="body-[2px] min-h-[4rem] mb-3 text-n1/50">
            {item.description}
          </p>
          {/* Large price display (if available) */}
          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>
          {/* CTA button - either "Get Started" (with price) or "Contact Us" (without price) */}
          <Button
            className="w-full mb-6"
            href={item.price ? "/pricing" : "/contact"}
            white={!!item.price}
          >
            {item.price ? "Get Started" : "Contact Us"}
          </Button>
          {/* List of features included in the pricing tier */}
          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start my-5 border-t border-n-6 pt-5"
              >
                {/* Single feature item with checkmark icon */}
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-[2rem] ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
