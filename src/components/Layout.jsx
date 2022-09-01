import { Outlet } from "react-router-dom";
// https://reactrouter.com/en/main/components/outlet
import Header from "./Header";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="App">
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
