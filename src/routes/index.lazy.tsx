import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex items-center justify-center min-h-screen w-full p-2">
      <h3 className="">Welcome Home!</h3>
    </div>
  );
}
