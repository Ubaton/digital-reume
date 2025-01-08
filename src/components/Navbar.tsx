import { FC } from "react";
import { Link } from "@tanstack/react-router";

interface LinkProps {
  name: string;
  link: string;
}

const links: LinkProps[] = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about" },
  { name: "Experience", link: "/experience" },
];

const Navbar: FC = () => {
  return (
    <>
      <nav className="bg-zinc-50 p-4 rounded-2xl border-b border-zinc-500">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-zinc-700 text-lg font-bold">Raymond Ngobeni</div>
          <div className="flex space-x-4">
            {links.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="text-zinc-700 hover:text-zinc-900"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <div className="px-32">
        <div className="flex items-center justify-center p-1 bg-zinc-50 rounded-b-xl min-w-md border-b  border-zinc-500">
          <span>Full Stack Software Engineer</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
