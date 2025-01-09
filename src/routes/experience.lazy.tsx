import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/experience")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div className="p-2 screen">Hello "/experience"!</div>;
}
