import React from "react";
import Raymond from "../../assets/Ray.jpg";
import Card from "../ui/card";
import Layout from "../ui/layout";

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

const skills = [
  "Design and Creativity",
  "App Architecture",
  "Interpersonal Skills",
  "Effective Communication",
  "Efficient Solving",
];

const Profile: React.FC = () => {
  return (
    <Layout className="flex">
      <Card className="bg-[#f2f2f2] dark:bg-[#090909] h-[630px]">
        <div className="flex space-x-4">
          <img
            src={Raymond}
            alt="Raymond Ngobeni's Picture"
            className="w-64 h-64 rounded-lg"
          />
          <div className="flex flex-col space-y-4">
            <div className="flex flex-col">
              <span className="text-2xl capitalize">{details.name}</span>
              <span className="text-4xl capitalize">{details.surname}</span>
            </div>
            <div>
              <h1 className="title">SKILLS</h1>
              <ul>
                {skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <h1 className="heading">FULL STACK SOFTWARE ENGINEER</h1>
          <h1 className="title">EDUCATION</h1>
        </div>
        <div className="space-y-4">
          {[
            {
              title: "SECONDARY SCHOOL",
              date: "2012 - 2015",
              school: "Phomolong Secondary School",
            },
            {
              title: "SONLINE CERTIFICATE “UDEMY”",
              school: "Web Development Bootcamp",
            },
            {
              title: "ONLINE CERTIFICATE “AWS”",
              school: "AWS Online Certificates",
            },
          ].map((edu, index) => (
            <div key={index}>
              <div className="flex space-x-4">
                <h1 className="heading">{edu.title}</h1>
                {edu.date && <span className="font-bold">{edu.date}</span>}
              </div>
              <p>{edu.school}</p>
            </div>
          ))}
        </div>
      </Card>
    </Layout>
  );
};

export default Profile;
