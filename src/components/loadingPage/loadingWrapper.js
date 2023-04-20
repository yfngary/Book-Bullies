import React, { useState } from "react";
import loadingSpinner from "./loading";
const LoadingWrapper = ({ component: Component, ...rest }) => {
  const [loading, setLoading] = useState(true);

  const handleLoaded = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && <div>Loading...</div>}
      <Component {...rest} onLoad={handleLoaded} />
    </>
  );
};

export default LoadingWrapper;