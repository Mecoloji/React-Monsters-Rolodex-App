import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <>
//     <App />
//   </>
// );

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

reportWebVitals();
