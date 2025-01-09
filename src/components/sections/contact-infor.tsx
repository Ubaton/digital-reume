import { FC } from "react";

interface ContactProps {
  // icon: React.ComponentType;
  name: string;
  value: string;
}

const information: ContactProps[] = [
  {
    // icon: ,
    name: "Contact",
    value: "0612002807",
  },
  {
    // icon: ,
    name: "Email",
    value: "mrrngobeni6@gmail.com",
  },
  {
    // icon: ,
    name: "Address",
    value: "4912 De Bruyn Street, Chloorkop, Edenvale, South Africa, 1620",
  },
  {
    // icon: ,
    name: "Website",
    value: "https://raymond-ngobeni-protfolio.vercel.app/",
  },
];

const ContactInfor: FC = () => {
  return (
    <header>
      <div>
        {information.map((info, index) => (
          <div key={index} className="flex items-center space-x-2">
            {/* <info.icon /> */}
            <span>
              {info.name}: {info.value}
            </span>
          </div>
        ))}
      </div>
    </header>
  );
};

export default ContactInfor;
