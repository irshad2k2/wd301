import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { API_ENDPOINT } from "../../config/constants";
import { useNavigate } from "react-router-dom";

type FormData = {
  name: string;
  user_name: string;
  email: string;
  password: string;
};

const SignupForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      const response = await fetch(`${API_ENDPOINT}/organisations`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Sign-up failed");
      }

      const responseData = await response.json();
      localStorage.setItem("authToken", responseData.token);
      localStorage.setItem("userData", JSON.stringify(responseData.user));

      console.log("Sign-up successful");
      navigate("/account");
    } catch (error) {
      console.error("Sign-up failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Organisation Name:</label>
        <input
          type="text"
          {...register("name")}
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Your Name:</label>
        <input
          type="text"
          {...register("user_name")}
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Email:</label>
        <input
          type="email"
          {...register("email")}
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold mb-2">Password:</label>
        <input
          type="password"
          {...register("password")}
          className="w-full border rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 focus:shadow-outline-blue"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-gray-700 hover:bg-gray-800 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline-gray mt-4"
      >
        Sign up
      </button>
    </form>
  );
};

export default SignupForm;
