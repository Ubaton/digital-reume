import { createRootRoute, Outlet } from "@tanstack/react-router";
import Navbar from "../components/Navbar";
import Layout from "../components/ui/layout";

export const Route = createRootRoute({
  component: () => (
    <div className="bg-white dark:bg-[#090909] min-h-screen">
      <Layout className="fixed left-0 right-0 py-4">
        <Navbar />
      </Layout>
      <Outlet />
    </div>
  ),
});
