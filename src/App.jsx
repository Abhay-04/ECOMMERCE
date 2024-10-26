import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import "./index.css";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
