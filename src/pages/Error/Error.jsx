import Lottie from "lottie-react";
import groovyWalkAnimation from "./Animation - 1725111328315.json";

const Error = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Lottie animationData={groovyWalkAnimation} style={{ width: "600px" }} />
      <h1>Page Not Found</h1>
    </div>
  );
};

export { Error };
