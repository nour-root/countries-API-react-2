import "./App.css";
import MainPage from "./pages/mainPage";
import { StateContext } from "./Context/stateContext";
import { useState } from "react";
document.body.classList.add("bg-secondary", "dark:bg-dark-secondary");

function App() {
  const [state, setState] = useState();
  return (
    <>
      <StateContext.Provider value={{ state, setState }}>
        <MainPage />
      </StateContext.Provider>
    </>
  );
}

export default App;
