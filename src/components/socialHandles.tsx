"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
const people = [
  {
    id: 1,
    name: "X",
    designation: "@Strayapay",
    image:"./assets/xlogo.jpg"  },
  {
    id: 2,
    name: "Facebook",
    designation: "@Strayapay",
    image:"./assets/facebooklogo.png"  },
  {
    id: 3,
    name: "Instagram",
    designation: "@Strayapay",
    image:"./assets/instaLogo.jpeg"  },
  {
    id: 4,
    name: "Linkedin",
    designation: "@Strayapay",
    image:"./assets/linkedinlogo.png"  },
];

export function SocialHandles() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full z-60">
      <AnimatedTooltip items={people} />
    </div>
  );
}
