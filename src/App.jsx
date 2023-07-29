import { Layout } from "./components/Layout";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <ToastContainer />
      <Layout />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
}

export default App;
