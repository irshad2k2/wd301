import { t } from "i18next";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="mb-4 text-4xl font-bold">{t("notFound")}</h1>
      <button
        onClick={navigateToHome}
        className="px-6 py-3 font-semibold text-white transition duration-300 ease-in-out bg-blue-500 rounded hover:bg-blue-600"
      >
        {t("backHome")}
      </button>
    </div>
  );
};

export default NotFoundPage;
