import { FC } from "react";
import { MdAlternateEmail, MdOutlineEmail } from "react-icons/md";
import { PiPhoneCall } from "react-icons/pi";
import { FiLink2 } from "react-icons/fi";
import Layout from "../ui/layout";
import Card from "../ui/card";

interface ContactProps {
  icon: React.ComponentType;
  name: string;
  value: string;
}

interface BioProps {
  title: string;
  description: string;
}

const information: ContactProps[] = [
  {
    icon: PiPhoneCall,
    name: "Contact",
    value: "0612002807",
  },
  {
    icon: MdOutlineEmail,
    name: "Email",
    value: "mrrngobeni6@gmail.com",
  },
  {
    icon: MdAlternateEmail,
    name: "Address",
    value: "4912 De Bruyn Street, Chloorkop, Edenvale, South Africa, 1624",
  },
  {
    icon: FiLink2,
    name: "Website",
    value: "https://raymond-ngobeni-protfolio.vercel.app/",
  },
];

const bio: BioProps[] = [
  {
    title: "Summary",
    description: `
      As a passionate full-stack developer, I thrive on transforming ideas into dynamic and innovative web solutions.
      Dive into my latest projects and articles, where I showcase my mastery in React JS, Next.js, React Native, and 
      cutting-edge web development. Let’s build the future, one line of code at a time!.
    `,
    // image: Profile,
  },
];

const ContactInfor: FC = () => {
  return (
    <Layout>
      <header className="flex items-center justify-center w-full">
        <div className="flex justify-between space-x-4">
          <Card className="flex-1">
            <div>
              <strong>Contact:</strong>
            </div>
            {information.map((info, index) => (
              <div key={index} className="flex items-center space-x-2">
                <info.icon />
                <span>
                  {info.name}: {info.value}
                </span>
              </div>
            ))}
          </Card>
          <Card className="flex-1">
            {bio.map((bioinfo, index) => (
              <div key={index}>
                <strong>{bioinfo.title}:</strong>
                <p>{bioinfo.description}</p>
              </div>
            ))}
          </Card>
        </div>
      </header>
    </Layout>
  );
};

export default ContactInfor;
