import { motion } from "framer-motion";
import flowmain from "../../assets/img/quests/flowmain.svg";
import flowbg from "../../assets/img/quests/flowbg.svg";
import { navigate } from "@reach/router";

const FlowHero = ({ slug }) => {
  return (
    <div className="bg-[#000] min-h-screen">
      <img
        src={flowbg}
        alt="backgound-image"
        className="absolute object-cover right-0 h-screen"
      />

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto flex items-center justify-between max-w-7xl px-4 sm:px-6 lg:px-8 py-32 sm:py-48 lg:py-56">
          <div className="max-w-xl">
            <h1 className="mx-auto mt-10 max-w-2xl text-5xl font-bold text-left tracking-normal text-magwhite sm:text-7xl">
              FLOW BLOCKCHAIN
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate/90 text-left pr-16">
              Learn about a highly scalable permissionless blockchain designed
              for massive throughput, world-class security, safety and
              recoverability of accounts.
            </p>
            <div className="mt-10 flex items-center gap-x-6 w-64">
              <motion.button
                onClick={() => navigate(`/q/${slug}/lessons`)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-md bg-[#165f44]/80 px-5 py-3.5 font-semibold text-magwhite shadow-sm hover:bg-[#165f44] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sunglow"
              >
                Start Quest
              </motion.button>
              <a
                target="_blank"
                href="https://www.mantle.xyz/"
                className="font-semibold leading-6 text-slate group relative w-[102px]"
                rel="noreferrer"
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
          <img
            src={flowmain}
            alt="backgound-image"
            className="object-contain w-[40%] max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default FlowHero;
