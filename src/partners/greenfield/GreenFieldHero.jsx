import { motion } from "framer-motion";
import greenfield from "../../assets/img/quests/greenfieldHero.png";
import { navigate } from "@reach/router";

const GreenFieldHero = ({ slug }) => {
  return (
    <div className="bg-oxford min-h-screen">
      <div className="relative isolate pt-14">
        <svg
          className="absolute inset-0 -z-10 h-full w-full stroke-sunglow/80 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" className="overflow-visible fill-sunglow">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth="0"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          />
        </svg>
        {/* grid lines svg start */}

        <div className="mx-auto max-w-7xl px-6 py-24 pt-10 sm:pb-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:pb-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="mt-10 max-w-lg text-5xl font-bold tracking-tight text-magwhite sm:text-7xl">
              BNB GREENFIELD
            </h1>
            <p className="mt-6 text-lg leading-8 text-magwhite/95">
              A Decentralized data storage system and economy. Explore
              greenfield and all the new possibilities with data within the BNB
              Chain ecosystem.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <motion.button
                onClick={() => navigate(`/q/${slug}/lessons`)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-md bg-[#079e0c]/80 px-5 py-3.5 font-semibold text-white shadow-sm hover:bg-[#079e0c] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sunglow"
              >
                Start Quest
              </motion.button>
              <a
                href="https://greenfield.bnbchain.org/en"
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
          <div className="mt-16 sm:mt-24 max-w-xs sm:max-w-lg  lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
            <img
              src={greenfield}
              alt=""
              className="mt-10 aspect-[4/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreenFieldHero;
