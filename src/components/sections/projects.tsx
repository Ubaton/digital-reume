import { Link } from "@tanstack/react-router";
import Card from "../ui/card";
import {
  ExternalLink,
  BrandLinkedin,
  BrandX,
  BrandGithub,
} from "@mynaui/icons-react";

const Projects = () => {
  return (
    <div className="flex flex-rowjustify-between w-full gap-6">
      <Card className="flex flex-col justify-between flex-1 w-[300px] h-[300px] bg-[rgb(242,242,242)] dark:bg-[#090909]">
        <div className="flex justify-between items-center">
          <h1 className="title">FILE STRUCTURE GEN</h1>
          <Link to="/">
            <ExternalLink size={25} />
          </Link>
        </div>
        <div className="flex justify-end items-center">
          <BrandLinkedin size={25} />
          <BrandX size={25} />
          <BrandGithub size={25} />
        </div>
      </Card>
      <Card className="flex flex-col justify-between flex-1 w-[300px] h-[300px] bg-[#f2f2f2] dark:bg-[#090909]">
        <div className="flex justify-between items-center">
          <h1 className="title">QR CODE GENERATOR</h1>
          <Link to="/">
            <ExternalLink size={25} />
          </Link>
        </div>
        <div className="flex justify-end items-center">
          <BrandLinkedin size={25} />
          <BrandX size={25} />
          <BrandGithub size={25} />
        </div>
      </Card>
    </div>
  );
};

export default Projects;
