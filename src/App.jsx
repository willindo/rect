import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Icons from "./components/Icons";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>really excited live develop environment </h1>
      <p>now from container file ,it has been changed by local file too</p>
      <Icons />
      <h3>CI-CD DEPLOYMENT</h3>
      <span>still no reflect any automation </span>
    </>
  );
}

export default App;
