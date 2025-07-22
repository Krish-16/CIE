import React from "react";
import { FaUser, FaLock } from "react-icons/fa";

const LoginCard = ({
  title,
  subtitle,
  idPlaceholder,
  passwordPlaceholder,
  buttonText,
  onSubmit,
  id,
  setId,
  password,
  setPassword,
  error,
}) => {
  return (
    <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-8 w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-2">{title}</h2>
      {subtitle && <p className="text-center text-gray-600 mb-6">{subtitle}</p>}
      <div className="mb-4 relative">
        <FaUser className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          placeholder={idPlaceholder}
          className="w-full pl-10 pr-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-6 relative">
        <FaLock className="absolute left-3 top-3 text-gray-400" />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder={passwordPlaceholder}
          className="w-full pl-10 pr-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <button
        onClick={onSubmit}
        className="w-full py-2 rounded bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold hover:from-blue-600 hover:to-purple-600 transition"
      >
        {buttonText}
      </button>
      {error && (
        <p className="mt-2 text-red-600 text-sm text-center">
          {error}
        </p>
      )}
    </div>
  );
};

export default LoginCard;
