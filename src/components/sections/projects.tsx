import { Link } from "@tanstack/react-router";
import Card from "../ui/card";
import {
  ExternalLink,
  BrandLinkedin,
  BrandX,
  BrandGithub,
} from "@mynaui/icons-react";
import Filegen from "../../assets/Filegen.jpeg";
import QRCode from "../../assets/QR-code-gen.jpeg";

const projectData = [
  {
    title: "FILE STRUCTURE GEN",
    link: "/",
    imageUrl: Filegen,
  },
  {
    title: "QR CODE GENERATOR",
    link: "/",
    imageUrl: QRCode,
  },
];

const socialLinks = [
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/raymond-ngobeni-b7ab26163/",
  },
  {
    name: "X",
    link: "https://x.com/_GoldManRay",
  },
  {
    name: "Github",
    link: "https://github.com/Ubaton",
  },
];

interface ProjectCardProps {
  title: string;
  link: string;
  imageUrl: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, link, imageUrl }) => (
  <Card className="flex flex-col justify-between flex-1 w-[300px] h-[300px] bg-[#f2f2f2] dark:bg-[#090909] p-4">
    <div className="flex justify-between items-center">
      <h1 className="title">{title}</h1>
      <Link to={link}>
        <ExternalLink size={25} />
      </Link>
    </div>

    <div className="flex-1 flex items-center justify-center p-4">
      <img
        src={imageUrl}
        alt={title}
        className="max-w-full max-h-48 object-contain rounded-2xl"
      />
    </div>

    <div className="flex justify-end items-center space-x-2">
      <Link to={socialLinks[0].link}>
        <BrandLinkedin size={25} />
      </Link>
      <Link to={socialLinks[1].link}>
        <BrandX size={25} />
      </Link>
      <Link to={socialLinks[2].link}>
        <BrandGithub size={25} />
      </Link>
    </div>
  </Card>
);

const Projects = () => {
  return (
    <div className="flex flex-row justify-between w-full gap-6">
      {projectData.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          link={project.link}
          imageUrl={project.imageUrl}
        />
      ))}
    </div>
  );
};

export default Projects;
