const Card = ({ item, title }) => {
  return (
    <div className=" sm:px-6 pb-6 ">
      <div className="py-6 mx-1 min-[500px]:mx-2 sm:px-6 w-32 min-[500px]:w-40 sm:w-48 flex flex-col justify-center border rounded-lg hover:shadow-lg border-purpMain-50/60 hover:shadow-purpMain-50/80">
        <div className="text-7xl mb-2 mx-auto">{item}</div>
        <p className=" text-center">{title}</p>
      </div>
    </div>
  );
};

export default Card;
