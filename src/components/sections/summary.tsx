import Badge from "../ui/badge";
import Card from "../ui/card";

const techStack = [
  "JavaScript",
  "Node JS",
  "Java",
  "TypeScript",
  "Python",
  "Tailwind CSS",
  "CSS",
  "Rust",
  "HTML",
  "EJS",
  "Express JS",
];

const Summary = () => {
  return (
    <Card className="bg-[#f2f2f2] dark:bg-[#090909] h-[300px] space-y-4">
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
          {techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default Summary;
