export default function Card(props) {
  return (
    <div className="  bg-purple-800/20 p-6  md:p-12 hover:shadow-lg shadow-sm  shadow-purpMain-50/20 hover:shadow-purpMain-50/50 rounded-lg">
      <h2 className=" text-center mb-6 text-3xl font-semibold">
        {props.title}
      </h2>
      <div className="block py-6 md:py-0 md:w-72 md:h-48 mx-auto">
        <img src={props.image} alt={props.alt}></img>
      </div>
      <p className=" text-slate-100 md:h-36 mx-auto text-center max-w-xl">
        {props.description}
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-8 text-center py-8 mt-4">
        <button
          className="bg-purpMain-50/30  p-3 font-semibold  hover:bg-purpMain-50/[.2]"
          onClick={(e) => {
            e.preventDefault();
            window.open(props.source);
          }}
        >
          Source Code
        </button>
        {props.preview ? (
          <button
            className="bg-purpMain-50/30   p-3 font-semibold  hover:bg-purpMain-50/[.2]"
            onClick={(e) => {
              e.preventDefault();
              window.open(props.preview);
            }}
          >
            Live Preview
          </button>
        ) : null}
      </div>
      <div className="flex-col mx-auto">
        <p className="text-center">Technologies Used</p>
        <div className=" flex gap-6 flex-wrap justify-center mt-4 items-center">
          <div className="flex gap-6  flex-wrap justify-center">
            {props.tools1} {props.tools2} {props.tools3} {props.tools4}
          </div>
        </div>
      </div>
    </div>
  );
}
