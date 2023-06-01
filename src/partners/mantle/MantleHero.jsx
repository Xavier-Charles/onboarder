import { motion } from "framer-motion";
import mantle from "../../assets/img/quests/herobg.jpg";
import { navigate } from "@reach/router";

const MantleHero = ({ slug }) => {
  return (
    <div className="bg-[#000] min-h-screen">
      <img
        src={mantle}
        alt="backgound-image"
        className="absolute object-cover right-0 h-screen"
      />
      <div
        alt="backgound-image"
        className="absolute -top-20 -left-10 w-[300px] h-[300px] bg-[#65b3ae]"
        style={{ filter: "blur(200px)" }}
      />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32 sm:py-48 lg:py-56">
          <div className="max-w-2xl">
            <h1 className="mx-auto mt-10 max-w-2xl text-5xl font-bold text-left tracking-normal text-magwhite sm:text-7xl">
              MANTLE NETWORK
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate/90 text-left pr-16">
              Learn to build on infrastructure for the open-internet. A
              resilient and credibly neutral network open to anyone without
              privilege or prejudice.
            </p>
            <div className="mt-10 flex items-center gap-x-6 w-64">
              <motion.button
                onClick={() => navigate(`/q/${slug}/lessons`)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-md bg-[#294a48]/80 px-5 py-3.5 font-semibold text-magwhite shadow-sm hover:bg-[#294a48] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sunglow"
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
        </div>
      </div>
    </div>
  );
};

export default MantleHero;
