const Slider = ({ links, isOpen }) => {
  return (
    <div
      className={`lg:hidden fixed right-0 top-0 pt-4  h-full bg-black/90 w-2/4   ease-in-out duration-300 z-10 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <ul className="flex flex-col gap-6 py-12">
        {links.map((link) => (
          <li
            key={link.key}
            className="  flex justify-center py-2 z-10 hover:bg-purpMain-50/30 select-none"
          >
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

// a recursion function that reverses a string inputj

export default Slider;
