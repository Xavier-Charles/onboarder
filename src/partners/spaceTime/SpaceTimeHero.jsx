import { motion } from "framer-motion";
import spaceTime from "../../assets/img/quests/spaceTime.webp";
import { navigate } from "@reach/router";

const SpaceTimeHero = ({ slug }) => {
  return (
    <div className="bg-oxford min-h-screen">
      <div
        alt="backgound-image"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(315deg,#ad00bc 0%,#510683 30%,#42066b 50%,#0c0817 83%, #0a0818)",
        }}
      />
      <div className="relative isolate pt-14">
        <div className="mx-auto z-1 max-w-7xl px-6 py-24 pt-10 sm:pb-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:pb-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="mt-10 max-w-lg text-5xl font-bold tracking-tight text-magwhite sm:text-7xl">
              Space and Time
            </h1>
            <p className="mt-6 text-lg leading-8 text-magwhite/95">
              Learn about the first decentralized data warehouse that connects
              on-chain and off-chain data to power a new generation of smart
              contract use cases.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <motion.button
                onClick={() => navigate(`/q/${slug}/lessons`)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-md bg-[#510683]/80 px-5 py-3.5 font-semibold text-white shadow-sm hover:bg-[#510683] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sunglow"
              >
                Start Quest
              </motion.button>
              <a
                href="https://www.spaceandtime.io/"
                className="font-semibold leading-6 text-magwhite group relative w-[102px]"
              >
                Learn more{" "}
                <span
                  aria-hidden="true"
                  className="absolute -right-0 top-[1px] group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </div>
          <div className="mt-8 max-w-[280px] sm:max-w-md  lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <img
              src={spaceTime}
              alt=""
              className="mt-10 aspect-[4/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceTimeHero;
