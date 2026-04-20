import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const setupVercelTelemetry = () => {
	void Promise.all([
		import("@vercel/analytics").then(({ inject }) => inject()),
		import("@vercel/speed-insights").then(({ injectSpeedInsights }) => injectSpeedInsights()),
	]);
};

if ("requestIdleCallback" in window) {
	window.requestIdleCallback(setupVercelTelemetry, { timeout: 2000 });
} else {
	window.setTimeout(setupVercelTelemetry, 1200);
}

createRoot(document.getElementById("root")!).render(<App />);
