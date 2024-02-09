import Appbar from "./Appbar";
import { Outlet } from "react-router-dom";

const AccountLayout = () => {
  return (
    <>
      <Appbar></Appbar>
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <Outlet></Outlet>
        </div>
      </main>
    </>
  );
};

export default AccountLayout;
