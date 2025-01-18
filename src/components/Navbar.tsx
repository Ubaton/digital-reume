import { FC } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import ThemeToggle from "./ui/theme-toggle.tsx";

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
      <nav className="bg-[#f2f2f2] dark:bg-zinc-800 p-4 rounded-2xl border-b border-zinc-500">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-zinc-700 dark:text-zinc-200 text-lg font-bold">
            <Link to="/">Raymond Ngobeni</Link>
          </div>
          <div className="flex space-x-4 items-center">
            {links.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-zinc-100 relative inline-block"
              >
                <span className="relative">
                  {item.name}
                  <motion.div
                    className="absolute bottom-0 left-0 h-[2px] bg-zinc-900 dark:bg-zinc-100"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </span>
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </nav>
      <div className="px-32">
        <div className="flex items-center justify-center p-1 bg-[#f2f2f2] dark:bg-zinc-800 rounded-b-xl min-w-md border-b border-zinc-500">
          <span className="dark:text-zinc-200">
            Full Stack Software Engineer
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;
