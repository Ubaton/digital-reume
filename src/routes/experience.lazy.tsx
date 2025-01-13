import { createLazyFileRoute } from "@tanstack/react-router";
import Layout from "../components/ui/layout";
import Experience from "../components/sections/experience";

export const Route = createLazyFileRoute("/experience")({
  component: RouteComponent,
});

function RouteComponent() {
  

  return (
    <Layout>
      <Experience />
    </Layout>
  );
}
