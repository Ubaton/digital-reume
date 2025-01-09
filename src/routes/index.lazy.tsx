import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2 screen">
      <h3 className="">Welcome Home!</h3>
    </div>
  );
}
