import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "./context/theme";
import "./i18n.ts";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <I18nextProvider i18n={i18n}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </I18nextProvider>,
);
