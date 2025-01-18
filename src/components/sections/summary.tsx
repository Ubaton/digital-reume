import Badge from "../ui/badge";
import Card from "../ui/card";

const Summary = () => {
  return (
    <Card className="bg-[#f2f2f2] h-[300px] space-y-4">
      <div>
        <h1 className="title">SUMMARY</h1>
        <p>
          As a skilled full-stack developer, I am dedicated to turning ideas
          into innovative web applications. Explore my latest projects and
          articles, showcasing my expertise in React JS, Next JS, React Native,
          and Web development.
        </p>
      </div>
      <div className="space-y-2">
        <h1 className="title">TECH STACK</h1>
        <div className="flex space-x-4">
          <Badge>JavaScript</Badge>
          <Badge>Node JS</Badge>
          <Badge>Java</Badge>
          <Badge>TypeScript</Badge>
          <Badge>Python</Badge>
          <Badge>Tailwind CSS</Badge>
          <Badge>CSS</Badge>
          <Badge>Rust</Badge>
          <Badge>HTML</Badge>
          <Badge>EJS</Badge>
        </div>
      </div>
    </Card>
  );
};

export default Summary;
