import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Header from "./Header";

import "./Root.less";

export default function Root() {
  return (
    <>
      <Header />
      <Navbar />
      <main>
        <Outlet />
      </main>
    </>
  );
}
