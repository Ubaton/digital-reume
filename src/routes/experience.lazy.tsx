import { createLazyFileRoute } from "@tanstack/react-router";
import Layout from "../components/ui/layout";
import Experience from "../components/sections/experience";

export const Route = createLazyFileRoute("/experience")({
  component: RouteComponent,
});

// Define the required props for the Experience component
const experienceProps = {
  years: 5,
  company: "Example Company",
  content: "Worked on various projects.",
  description: "A brief description of my experience.",
};

function RouteComponent() {
  return (
    <Layout>
      <Experience {...experienceProps} />
    </Layout>
  );
}
