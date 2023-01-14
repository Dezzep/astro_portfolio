import Typewriter from 'typewriter-effect';

function Type() {
  return (
    <div className="text-xl sm:text-3xl text-purpMain-50">
      <Typewriter
        options={{
          strings: [
            'Developer',
            'Programmer',
            'MERN Stack Developer',
            'Reader',
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}

export default Type;
