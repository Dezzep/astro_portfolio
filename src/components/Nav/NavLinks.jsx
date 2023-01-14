import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';

export default function NavLinks(props) {
  return (
    <div className=" flex gap-8 sm:gap-12 items-center ">
      <a
        href="/"
        className=" md:text-xl hover:text-purpMain-50 flex items-center gap-2 tracking-wider  "
      >
        <AiOutlineHome />
        Home
      </a>
      <a
        href="#work"
        className=" md:text-xl hover:text-purpMain-50 flex items-center gap-2 tracking-wider  "
      >
        <AiOutlineUser style={{ marginBottom: '2px' }} />
        Skills
      </a>
      <a
        href="#about"
        className="md:text-xl hover:text-purpMain-50 flex items-center gap-2 tracking-wider"
      >
        <AiOutlineFundProjectionScreen />
        Projects
      </a>
      <a
        href="#contact"
        className="md:text-xl hover:text-purpMain-50 flex items-center gap-2 tracking-wider "
      >
        <CgFileDocument />
        Resume
      </a>
    </div>
  );
}
