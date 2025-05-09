// === [ Notification Component ] ===
// Displays a compact card UI resembling a system or app notification.
// Includes:
// - A static image thumbnail (e.g., profile or logo)
// - A title (passed as prop)
// - A list of mini avatars/icons from constants
// - A timestamp

import React from "react";

import { notificationImages } from "../constants";
import { notification1 } from "../assets";

// Functional component definition
// Props:
// - className: additional class names passed externally
// - title: heading text displayed in the notification
const Notification = ({ className, title }) => {
  return (
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      {/* Main thumbnail image for the notification (e.g., user or app icon) */}
      <img
        src={notification1}
        width={62}
        height={62}
        alt="inmage"
        className="rounded-xl"
      />
      <div className="flex-1">
        <h6 className="mb-1 font-semibold text-base">{title}</h6>
        <div className="flex items-center justify-between">
          {/* Renders list of avatar images from notificationImages constant */}
          <ul className="flex -m-0.5">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex w-6 h-6 border-[2px] border-n-12 rounded-full overflow-hidden"
              >
                <img
                  src={item}
                  className="w-full"
                  width={20}
                  height={20}
                  alt={item}
                />
              </li>
            ))}
          </ul>
          {/* Static timestamp shown on the right */}
          <div className="body-[2px] text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
