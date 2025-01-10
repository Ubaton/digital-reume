import { FC } from "react";
import { MdAlternateEmail, MdOutlineEmail } from "react-icons/md";
import { PiPhoneCall } from "react-icons/pi";
import { FiLink2 } from "react-icons/fi";

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
    value: "4912 De Bruyn Street, Chloorkop, Edenvale, South Africa, 1620",
  },
  {
    icon: FiLink2 ,
    name: "Website",
    value: "https://raymond-ngobeni-protfolio.vercel.app/",
  },
];

const bio: BioProps[] = [
  {
    title: "Summary",
    description: `
      As a skilled full-stack developer, I am dedicated to turning ideas 
            into innovative web applications. Explore my latest projects and 
            articles, showcasing my expertise in React JS, Next JS, React 
            Native, and Web development.
    `,
  },
];

const ContactInfor: FC = () => {
  return (
    <header>
      <div className="flex justify-between container">
        <div>
          {information.map((info, index) => (
            <div key={index} className="flex  space-x-2">
              <info.icon />
              <span>
                {info.name}: {info.value}
              </span>
            </div>
          ))}
        </div>
        <div>
          {bio.map((bioinfo, index) => (
            <div key={index}>
              <strong>{bioinfo.title}:</strong> {bioinfo.description}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
};

export default ContactInfor;
