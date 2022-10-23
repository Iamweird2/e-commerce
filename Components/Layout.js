import Header from "./Header";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";

const Layout = ({ children, actualBody }) => {
  const menuToggle = useSelector((state) => state.menuToggle.value);
  return (
    <div>
      <Header />
      {!menuToggle && <Sidebar />}
      {children}
    </div>
  );
};

export default Layout;
