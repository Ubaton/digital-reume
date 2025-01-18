import Card from "../ui/card";
import { ExternalLink } from "@mynaui/icons-react";

const Projects = () => {
  return (
    <div className="flex flex-rowjustify-between w-full gap-6">
      <Card className="flex-1 w-[300px] h-[300px]">
        <div className="flex justify-between items-center">
          <h1 className="title">FILE STRUCTURE GEN</h1>
          <ExternalLink size={25} />
        </div>
      </Card>
      <Card className="flex-1 w-[300px] h-[300px]">
        <div className="flex justify-between items-center">
          <h1 className="title">QR CODE GENERATOR</h1>
          <ExternalLink size={25} />
        </div>
      </Card>
    </div>
  );
};

export default Projects;
