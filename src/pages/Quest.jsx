import { Link } from "@reach/router";
import { motion, useIsPresent } from "framer-motion";

const Quest = () => {
  const isPresent = useIsPresent();

  return (
    <article>
      <div key="quest" className="bg-oxford">
        <Link to="/" className="text-magwhite underline text-3xl">
          Home
        </Link>
        <h1>Quest</h1>
        <p className="py-40">Quest</p>
      </div>
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: 0.5, ease: "circOut", delay: 0.5 },
        }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="bg-sunglow/95 fixed top-0 left-0 right-0 bottom-0 z-10"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: 0.5, ease: "circOut", delay: 0.4 },
        }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="bg-teal/95 fixed top-0 left-0 right-0 bottom-0 z-20"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: 0.5, ease: "circOut", delay: 0.2 },
        }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="bg-pink/95 fixed top-0 left-0 right-0 bottom-0 z-30"
      />
      <motion.div
        initial={{ scaleX: 1 }}
        animate={{
          scaleX: 0,
          transition: { duration: 0.5, ease: "circOut", delay: 0.1 },
        }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="bg-oxford/95 fixed top-0 left-0 right-0 bottom-0 z-40"
      />
    </article>
  );
};

export default Quest;
