import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const setupVercelTelemetry = () => {
  const loadTelemetry = () => {
    void Promise.all([
      import("@vercel/analytics").then(({ inject }) => inject()),
      import("@vercel/speed-insights").then(({ injectSpeedInsights }) => injectSpeedInsights()),
    ]);
  };

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(loadTelemetry, { timeout: 3000 });
  } else {
    window.setTimeout(loadTelemetry, 1500);
  }
};

createRoot(document.getElementById("root")!).render(<App />);
setupVercelTelemetry();
