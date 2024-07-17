import React, { useContext, useState } from "react";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { ThemeContext } from "./context/theme";
import { ProjectsProvider } from "./context/projects/context";
import { MembersProvider } from "./context/members/context";
import { useTranslation } from "react-i18next";

const App: React.FC = () => {
  const { theme } = useContext(ThemeContext);
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleChangeLanguage = (lng: string) => {
    setCurrentLanguage(lng);
    i18n.changeLanguage(lng);
  };

  const date = new Date();
  const dateFormatter = new Intl.DateTimeFormat(
    currentLanguage === "en"
      ? "en-US"
      : currentLanguage === "pt"
        ? "pt-PT"
        : currentLanguage === "fr"
          ? "fr-FR"
          : currentLanguage === "de"
            ? "de-DE"
            : currentLanguage === "hi"
              ? "hi-IN"
              : currentLanguage === "ta"
                ? "ta-IN"
                : "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  const timeFormatter = new Intl.DateTimeFormat(
    currentLanguage === "en"
      ? "en-US"
      : currentLanguage === "pt"
        ? "pt-PT"
        : currentLanguage === "fr"
          ? "fr-FR"
          : currentLanguage === "de"
            ? "de-DE"
            : currentLanguage === "hi"
              ? "hi-IN"
              : currentLanguage === "ta"
                ? "ta-IN"
                : "en-US",
    {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    },
  );

  const formattedDate = dateFormatter.format(date);
  const formattedTime = timeFormatter.format(date);

  return (
    <div
      className={`h-screen w-full mx-auto py-2 ${theme === "dark" ? "dark" : ""}`}
    >
      <div className="flex mx-1">
        <div className="flex gap-7  basis-4/6">
          <button onClick={() => handleChangeLanguage("en")}>
            {t("English")} (EN)
          </button>
          <button onClick={() => handleChangeLanguage("pt")}>
            {t("Portuguese")} (PT)
          </button>
          <button onClick={() => handleChangeLanguage("fr")}>
            {t("French")} (FR)
          </button>
          <button onClick={() => handleChangeLanguage("de")}>
            {t("German")} (DE)
          </button>
          <button onClick={() => handleChangeLanguage("hi")}>
            {t("Hindi")} (HI)
          </button>
          <button onClick={() => handleChangeLanguage("ta")}>
            {t("Tamil")} (TA)
          </button>
        </div>
        <div className="basis-2/6 flex">
          <div className="basis-1/2">
            {t("date")}: {formattedDate}
          </div>
          <div className="basis-1/2">
            {t("time")}: {formattedTime}
          </div>
        </div>
      </div>

      <ProjectsProvider>
        <MembersProvider>
          <RouterProvider router={router} />
        </MembersProvider>
      </ProjectsProvider>
    </div>
  );
};

export default App;
