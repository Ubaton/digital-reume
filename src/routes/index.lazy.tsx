import { createLazyFileRoute } from "@tanstack/react-router";
// import ContactInfor from "../components/sections/contact-infor";
// import Layout from "../components/ui/layout";
import Profile from "../components/sections/profile";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

interface ProfileProps {
  name: string;
}

function Index({ name }: ProfileProps) {
  const profileInfo = { name };

  return (
    <div className="flex p-2 padding-top">
      <Profile {...profileInfo} />
      {/* <ContactInfor /> */}
      {/* <Layout className="my-8">
        <hr />
      </Layout> */}
    </div>
  );
}
