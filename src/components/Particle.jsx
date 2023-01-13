import React from 'react';
import Particles from 'react-tsparticles';

function Particle() {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 180,
            density: {
              enable: true,
              value_area: 1400,
            },
          },

          move: {
            enable: true,
            direction: 'right',
            speed: 0.5,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 0.8,
              opacity_min: 0.05,
            },
          },
        },

        retina_detect: true,
      }}
    />
  );
}

export default Particle;
