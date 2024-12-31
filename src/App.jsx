import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Icons from "./components/Icons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Icons />
      <span>still no reflect any automation </span>
      <h1>really excited live develop environment </h1>
      <p>now from container file ,it has been changed by local file too</p>
      <h3>CI-CD DEPLOYMENT</h3>
    </>
  );
}

export default App;
// docker push badshanoordeen/just-try:latest