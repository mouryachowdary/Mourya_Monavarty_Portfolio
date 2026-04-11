import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Render app immediately (prioritize UI)
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(<App />);
}

// Load Vercel analytics AFTER render (non-blocking)
import("@vercel/analytics").then(({ inject }) => inject());
import("@vercel/speed-insights").then(({ injectSpeedInsights }) =>
  injectSpeedInsights()
);
