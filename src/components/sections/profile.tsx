import React from "react";
import Raymond from "../../assets/Ray.jpg";
import Card from "../ui/card";
import Layout from "../ui/layout";

interface ProfileProps {
  name: string;
}

const details = {
  name: "RAYMOND",
  surname: "NGOBENI",
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

const skills = {
  note1: ["Design and Creativity"],
  note2: ["App Architecture"],
  note3: ["Interpersonal Skills "],
  note4: ["Effective Communication "],
  note5: ["Efficient Solving"],
};

const Profile: React.FC<ProfileProps> = () => {
  return (
    <Layout className="flex">
      <Card className="w-auto h-auto">
        <div className="flex space-x-4">
          <img
            src={Raymond}
            alt="Raymond Ngobeni's Picture"
            className="w-60 h-60 rounded-lg"
          />
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <span className="text-2xl capitalize"> {details.name}</span>
              <span className="text-4xl capitalize">{details.surname}</span>
            </div>
            <div>
              <ul>
                <li>{skills.note1}</li>
                <li>{skills.note2}</li>
                <li>{skills.note3}</li>
                <li>{skills.note4}</li>
                <li>{skills.note5}</li>
              </ul>
            </div>
          </div>
        </div>
      </Card>
    </Layout>
  );
};

export default Profile;
