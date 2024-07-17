import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { API_ENDPOINT } from "../../config/constants";

const SigninForm: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(`${API_ENDPOINT}/users/sign_in`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Sign-in failed");
      }

      const data = await response.json();
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("userData", JSON.stringify(data.user));

      console.log("Sign-in successful");
      navigate("/account");
    } catch (error) {
      console.error("Sign-in failed:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            {t("email")}:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-md focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-gray-700">
            {t("password")}:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded-md focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 mt-4 font-semibold text-white bg-gray-700 rounded-md hover:bg-gray-800 focus:outline-none focus:shadow-outline-gray"
        >
          {t("signIn")}
        </button>
      </form>
      <p className="mt-4 text-sm text-gray-600">
        {t("noAccount")}
        <a href="/signup" className="text-blue-500 hover:text-blue-700">
          {t("signUp")}
        </a>
      </p>
    </div>
  );
};

export default SigninForm;
