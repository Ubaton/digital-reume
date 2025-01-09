import { createLazyFileRoute } from "@tanstack/react-router";
import ContactInfor from "../components/sections/contact-infor";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2 padding-top">
      <ContactInfor />
    </div>
  );
}
