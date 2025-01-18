import { createLazyFileRoute } from "@tanstack/react-router";
// import ContactInfor from "../components/sections/contact-infor";
// import Layout from "../components/ui/layout";
import Profile from "../components/sections/profile";
import Summary from "../components/sections/summary";
import Layout from "../components/ui/layout";
import Projects from "../components/sections/projects";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

interface ProfileProps {
  name: string;
}

function Index({ name }: ProfileProps) {
  const profileInfo = { name };

  return (
    <Layout className="flex p-2 padding-top gap-6">
      <div className="">
        <Profile {...profileInfo} />
      </div>
      <div className="flex-1 space-y-6">
        <Summary />
        <Projects />
      </div>
      {/* <ContactInfor /> */}
      {/* <Layout className="my-8">
        <hr />
      </Layout> */}
    </Layout>
  );
}
