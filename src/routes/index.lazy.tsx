import { createLazyFileRoute } from "@tanstack/react-router";
import ContactInfor from "../components/sections/contact-infor";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2 screen">
      <ContactInfor />
      <h3 className="">Welcome Home!</h3>
    </div>
  );
}
