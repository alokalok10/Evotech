import React from "react";
import ReactDOM from "react-dom/client";
import { OptionAdvance } from "./screens/OptionAdvance";

// const app = document.getElementById("app");
// const root = ReactDOMClient.createRoot(app);
// root.render(<OptionAdvance />);

const rootContainer = document.getElementById('root');

const root = ReactDOM.createRoot(rootContainer);
root.render(<OptionAdvance />);
