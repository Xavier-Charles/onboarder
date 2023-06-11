import { motion } from "framer-motion";
import truflation from "../../assets/img/quests/truflation.svg";
import { navigate } from "@reach/router";

const SpaceTimeHero = ({ slug }) => {
  return (
    <div className="bg-oxford min-h-screen">
      <div
        alt="backgound-image"
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(102.38deg,#1a2b6b 12.59%,#0f59c7 48.05%,#5e76cf)",
        }}
      />
      <div className="relative isolate pt-14">
        <div className="mx-auto z-1 max-w-7xl px-6 py-24 pt-10 sm:pb-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:pb-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="mt-10 max-w-lg text-5xl font-bold tracking-tight text-magwhite sm:text-7xl">
              Truflation
            </h1>
            <p className="mt-6 text-lg leading-8 text-magwhite/95">
              Learn about the unbiased, real-market inflation and economic data
              published daily by Truflation and it&apos;s potential application
              to decentralized systems and organizations
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <motion.button
                onClick={() => navigate(`/q/${slug}/lessons`)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-md bg-[#142254]/80 px-5 py-3.5 font-semibold text-white shadow-sm hover:bg-[#142254] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sunglow"
              >
                Start Quest
              </motion.button>
              <a
                href="https://truflation.com/"
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
              src={truflation}
              alt=""
              className="mt-10 w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpaceTimeHero;
