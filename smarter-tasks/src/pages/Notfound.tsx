import React from "react";
const Notfound: React.FC = () => {
  const redirectToHome = () => {
    window.location.href="/home"
  };
  return (
    <div>
      <h1>404 Not Found</h1>
      <button onClick={redirectToHome} type="button" id="backToHomeButton">
        Return to Home Page
      </button>
    </div>
  );
};

export default Notfound;
