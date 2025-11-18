import React from "react";
import { createRoot } from "react-dom/client";
import { LandingPageDesign } from "./screens/LandingPageDesign/LandingPageDesign";

const root = createRoot(document.getElementById("app"));

root.render(
  <React.StrictMode>
    <LandingPageDesign />
  </React.StrictMode>
);
