import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Icons from "./components/Icons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h3>CI-CD DEPLOYMENT</h3>
      <h1>really excited live develop environment </h1>
      <Icons />
      <span>changed ipppolreflect any automation </span>
      {/* <p>ci/cd WORKFLOW SUCCESS AUTO PUSH DOCKERHUB</p> */}
    </>
  );
}

export default App;
// docker push badshanoordeen/just-try:latest