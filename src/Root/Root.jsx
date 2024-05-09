import { Outlet } from "react-router-dom";
import Footer from "../components/CommonContent/Footer";
import Navbar from "../components/CommonContent/Navbar";

const Root = () => {
  return (
    <div>
      <div className="min-h-[calc(100vh)]">
        <div className="max-w-7xl flex flex-col  mx-auto">
          <Navbar></Navbar>
        </div>
        <div className="max-w-7xl flex flex-col  mx-auto">
          <Outlet></Outlet>
        </div>

        {/* <Footer></Footer> */}
      </div>
    </div>
  );
};

export default Root;
