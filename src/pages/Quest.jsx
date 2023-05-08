import { motion, useIsPresent } from "framer-motion";

const Quest = () => {
  const isPresent = useIsPresent();

  console.log(isPresent);

  return (
    <div>
      <div key="quest" className="bg-oxford">
        <h1>Quest</h1>
        <p className="py-40">Quest</p>
        <motion.div
          key="quest-motion"
          initial={{ scaleX: 1 }}
          animate={{
            scaleX: 0,
            transition: { duration: 0.5, ease: "circOut" },
          }}
          exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
          style={{ originX: isPresent ? 0 : 1 }}
          className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-teal"popLayout
        />
      </div>
    </div>
  );
};

export default Quest;
