import Typewriter from 'typewriter-effect';
import Layout from '../layouts/Layout.astro';

function Type() {
  return (
    <div className="text-3xl w-full text-transparent bg-clip-text bg-gradient-to-l from-purpMain-1 to-blue-700">
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
