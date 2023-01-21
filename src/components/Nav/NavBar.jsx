import { useState } from 'react';
import Slider from './Slider.jsx';

import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';

const links = [
  <a
    key="home"
    id="home"
    href="/"
    className="text-xl justify-center py-4 lg:py-auto  px-4 lg:px-auto w-full lg:w-auto  lg:hover:text-purpMain-50 flex items-center gap-2 tracking-wider  "
  >
    <AiOutlineHome />
    Home
  </a>,
  <a
    key="skills"
    id="skills"
    href="/skills"
    className=" text-xl justify-center py-4 lg:py-auto px-4 lg:px-auto w-full lg:w-auto  lg:hover:text-purpMain-50 flex items-center gap-2 tracking-wider  "
  >
    <AiOutlineUser style={{ marginBottom: '2px' }} />
    Skills
  </a>,
  <a
    key="projects"
    id="projects"
    href="/projects"
    className="text-xl justify-center py-4 lg:py-auto  px-4 lg:px-auto w-full lg:w-auto  lg:hover:text-purpMain-50 flex items-center gap-2 tracking-wider"
  >
    <AiOutlineFundProjectionScreen />
    Projects
  </a>,
  <a
    key="resume"
    id="resume"
    href="/resume"
    className="text-xl justify-center py-4 lg:py-auto px-4 lg:px-auto w-full lg:w-auto  lg:hover:text-purpMain-50 flex items-center gap-2 tracking-wider "
  >
    <CgFileDocument />
    Resume
  </a>,
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const hideTheNavSlider = () => {
    setIsOpen(false);
  };

  const showTheNavSlider = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <div className="bg-black/80 sticky top-0 z-50">
        <div className="py-4 lg:py-  fixed w-full top-0 bg-black/90">
          <div className="relative container flex justify-between  mx-auto px-4 lg:px-8  w-full">
            <a
              href="/"
              className="text-purple-700 text-3xl flex items-center  font-bold hover:text-purple-700"
            >
              JH
            </a>
            <div className="flex space-x-12 items-center">
              <div className="hidden lg:flex gap-8 sm:gap-12 items-center list-none">
                {links.map((link) => (
                  <li
                    key={link.key}
                    className=" text-xl z-10 hover:text-primary"
                  >
                    {link}
                  </li>
                ))}
              </div>
              {!isOpen ? (
                <div className="flex justify-end ml-auto lg:hidden">
                  <label onClick={showTheNavSlider}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="inline-block w-8 h-8 stroke-current cursor-pointer"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                      ></path>
                    </svg>
                  </label>
                </div>
              ) : (
                <div className="flex justify-end ml-auto lg:hidden">
                  <label onClick={hideTheNavSlider}>
                    <svg
                      className=" h-8 w-8 text-primary-content cursor-pointer"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        d="M6 18L18 6M6 6l12 12"
                      ></path>
                    </svg>
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Slider links={links} isOpen={isOpen} />
    </div>
  );
}
