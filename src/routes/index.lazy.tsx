import { createLazyFileRoute } from "@tanstack/react-router";

import Profile from "../components/sections/profile";
import Summary from "../components/sections/summary";
import Layout from "../components/ui/layout";
import Projects from "../components/sections/projects";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <Layout className="flex p-2 padding-top gap-6">
      <div className="">
        <Profile />
      </div>
      <div className="flex-1 space-y-6">
        <Summary />
        <Projects />
      </div>
    </Layout>
  );
}
