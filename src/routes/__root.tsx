import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbar from "../components/Navbar";

export const Route = createRootRoute({
  component: () => (
    <div className=" bg-[#f2f2f2] dark:bg-[#090909] min-h-screen">
      <div className="fixed left-0 right-0 px-[28rem] py-4">
        <Navbar />
      </div>
      <Outlet />
    </div>
  ),
});
