import { createLazyFileRoute } from "@tanstack/react-router";
import ContactInfor from "../components/sections/contact-infor";
import Layout from "../components/ui/layout";
import Profile from "../components/sections/profile";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="p-2 padding-top">
      <ContactInfor />
      <Layout className="my-8">
        <hr />
      </Layout>
      <Profile />
    </div>
  );
}
