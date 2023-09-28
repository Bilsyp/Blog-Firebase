import { Outlet } from "react-router-dom";
import { Navbar } from "./components";
const Layouts = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-8">
        <Outlet />
      </div>
    </>
  );
};
export default Layouts;
