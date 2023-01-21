const Slider = ({ links, isOpen }) => {
  return (
    <div
      className={`lg:hidden fixed right-0 top-0  h-full bg-black/90 w-2/4 pt-16 shadow-2xl  ease-in-out duration-300 z-10 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <ul className="flex flex-col gap-12 py-16">
        {links.map((link) => (
          <li
            key={link.key}
            className=" 3xl flex justify-center py-2 z-10 hover:bg-purpMain-50/30 select-none"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
