import React from "react";
import Raymond from "../../assets/Ray.jpg";
import Card from "../ui/card";
import Layout from "../ui/layout";

interface ProfileProps {
  name: string;
}

const Profile: React.FC<ProfileProps> = () => {
  return (
    <Layout className="flex justify-center items-center">
      <Card className="max-w-2xl">
        <img src={Raymond} alt="Raymond Ngobeni's Picture" />
      </Card>
    </Layout>
  );
};

export default Profile;
