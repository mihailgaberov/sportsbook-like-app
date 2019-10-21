import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { SelectionsContextProvider } from "./utilities/SelectionsProvider";

ReactDOM.render(
  <SelectionsContextProvider>
    <App />
  </SelectionsContextProvider>,
  document.getElementById("root") as HTMLElement
);
