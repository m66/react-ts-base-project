import { Outlet } from "react-router-dom";

import Header from "../../components/ui/Header/Header";
import Footer from "../../components/ui/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
