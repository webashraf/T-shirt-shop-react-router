import { Button } from "primereact/button";
import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";

//theme
import "primereact/resources/themes/lara-light-indigo/theme.css";

//core
import "primereact/resources/primereact.min.css";

//icons
import "primeicons/primeicons.css";
import { Toast } from "primereact/toast";
import { useRef } from "react";

function App() {
  const toast = useRef(null);

  return (
    <div className="App">
      <Header></Header>
      <div className="mt-24">
        <Outlet />
      </div>
      <div className="card flex justify-content-center">
      <Toast ref={toast} />
      </div>{" "}
    </div>
  );
}

export default App;
