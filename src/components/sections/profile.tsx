import React from "react";
import Raymond from "../../assets/Ray.jpg";
import Card from "../ui/card";
import Layout from "../ui/layout";

interface ProfileProps {
  name: string;
}

const details = {
  name: "Raymond Ngobeni",
  title: "Full Stack Developer",
  email: "mrrngobeni6@gmail.com",
  phone: "0612002807",
  address: "4912 De Bruyn Street, Chloorkop, Edenvale, South Africa, 1624",
  website: "https://raymond-ngobeni-protfolio.vercel.app/",
  github: "https://github.com/raymond-ngobeni",
  linkedin: "https://www.linkedin.com/in/raymond-ngobeni/",
  twitter: "https://twitter.com/raymond_ngobeni",
  facebook: "https://www.facebook.com/raymond.ngobeni",
  instagram: "https://www.instagram.com/raymond_ngobeni",
  youtube: "https://www.youtube.com/@raymondngobeni",
  skills: [
    "React JS",
    "Next JS",
    "React Native",
    "Tailwind CSS",
    "Vite JS",
    "TypeScript",
    "Node JS",
    "Express JS",
    "MongoDB",
  ],
};

const Profile: React.FC<ProfileProps> = () => {
  return (
    <Layout className="flex justify-center items-center">
      <Card className="max-w-2xl">
        <img src={Raymond} alt="Raymond Ngobeni's Picture" />
        {details.name}
      </Card>
    </Layout>
  );
};

export default Profile;
