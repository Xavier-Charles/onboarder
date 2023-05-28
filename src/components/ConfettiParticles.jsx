import { useEffect, useRef, useState } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { Notyf } from "notyf";
import "notyf/notyf.min.css";
import "../assets/css/notyf.css";
import { sucessMessagaes } from "../api/mockData/successMessages";

const ParticlesConfetti = ({ cardProgress }) => {
  const cardProgressRef = useRef(cardProgress);
  const [showConfetti, setShowConfetti] = useState(false);

  // https://codepen.io/matteobruni/pen/LYbwVjO
  // this customizes the component tsParticles installation
  const customInit = async (engine) => {
    // this adds the bundle to tsParticles
    await loadFull(engine);
  };

  // Create an instance of Notyf
  const notyf = new Notyf({
    duration: 4000,
    position: {
      x: "right",
      y: "top",
    },
  });

  const options = {
    fpsLimit: 60,
    particles: {
      number: {
        value: 0,
      },
      color: {
        value: ["#00FFFC", "#FC00FF", "#fffc00"],
      },
      shape: {
        type: ["circle", "square"],
      },
      opacity: {
        value: 0.9,
        animation: {
          enable: true,
          minimumValue: 0,
          speed: 1,
          startValue: "max",
          destroy: "min",
        },
      },
      size: {
        value: 5,
        random: {
          enable: true,
          minimumValue: 3,
        },
      },
      links: {
        enable: false,
      },
      life: {
        duration: {
          sync: true,
          value: 5,
        },
        count: 1,
      },
      move: {
        enable: true,
        gravity: {
          enable: true,
          acceleration: 15,
        },
        speed: { min: 10, max: 20 },
        decay: 0.1,
        direction: "none",
        straight: false,
        outModes: {
          default: "destroy",
          top: "none",
        },
      },
      rotate: {
        value: {
          min: 0,
          max: 360,
        },
        direction: "random",
        move: true,
        animation: {
          enable: true,
          speed: 60,
        },
      },
      tilt: {
        direction: "random",
        enable: true,
        move: true,
        value: {
          min: 0,
          max: 360,
        },
        animation: {
          enable: true,
          speed: 60,
        },
      },
      roll: {
        darken: {
          enable: true,
          value: 25,
        },
        enable: true,
        speed: {
          min: 15,
          max: 25,
        },
      },
      wobble: {
        distance: 30,
        enable: true,
        move: true,
        speed: {
          min: -15,
          max: 15,
        },
      },
    },
    interactivity: {
      detectsOn: "window",
      events: {
        resize: true,
      },
    },
    detectRetina: true,
    background: {
      color: "transparent",
    },
    emitters: {
      direction: "none",
      life: {
        count: 0,
        duration: 0.1,
        delay: 0.4,
      },
      rate: {
        delay: 0.1,
        quantity: 100,
      },
      size: {
        width: 0,
        height: 0,
      },
    },
  };

  useEffect(() => {
    return () => {
      notyf.dismissAll();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // check if card is completed and show Confetti
  if (
    cardProgressRef.current?.some(
      (item, i) =>
        item.completed === false && cardProgress[i].completed === true
    )
  ) {
    cardProgressRef.current = cardProgress;
    setShowConfetti(true);
    notyf.success({
      message:
        sucessMessagaes[
          Math.floor(Math.random() * (sucessMessagaes.length - 1))
        ],
      icon: false,
    });
    setTimeout(() => {
      setShowConfetti(false);
    }, 4000);
  }

  if (showConfetti)
    return (
      <div className="flex absolute pointer-events-none bottom-0 left-[40%]">
        <Particles options={options} init={customInit} />
      </div>
    );
  return <></>;
};

export default ParticlesConfetti;
