import { Outlet } from "react-router-dom";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

const MainLayout = () => {
  return (
    <div className="font-poppins">
      <div className="container mx-auto px-10">
        <Header></Header>
      </div>
      <div className="container mx-auto min-h-[calc(100vh-292px)] px-10">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
