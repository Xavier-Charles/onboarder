import { motion } from "framer-motion";
import stars from "../../assets/img/quests/stars.jpg";
import { navigate } from "@reach/router";

const ThetaHero = ({ slug }) => {
  return (
    <div className="bg-oxford min-h-screen">
      <img
        src={stars}
        alt="backgound-image"
        className="absolute object-cover inset-0 w-full h-full"
      />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
            <h1 className="mx-auto mt-10 max-w-2xl text-5xl font-bold text-center tracking-normal text-magwhite sm:text-7xl">
              THETA VIDEO INFRASTRUCTURE
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate/90 text-center">
              Leverage the robust capabilities of completely decentralized
              encoding, storage, and peer-to-peer distribution, facilitated by
              over 100,000 worldwide edge nodes while decreasing your content
              delivery costs.
            </p>
            <div className="mx-auto mt-10 flex items-center gap-x-6 w-64">
              <motion.button
                onClick={() => navigate(`/q/${slug}/lessons`)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-md bg-[#23d1d0]/80 px-5 py-3.5 font-semibold text-magwhite shadow-sm hover:bg-[#23d1d0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sunglow"
              >
                Start Quest
              </motion.button>
              <a
                target="_blank"
                href="https://www.thetatoken.org/"
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

export default ThetaHero;
