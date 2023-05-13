import clsx from "clsx";
import { motion } from "framer-motion";

const Card = ({ item, setSelectedId }) => {
  return (
    <motion.div
      layoutId={item.id}
      className={clsx("p-4 pb-5 w-full lg:w-1/3 cursor-pointer", item.classes)}
      onClick={() => {
        setSelectedId(item.id);
      }}
    >
      <motion.div className="h-full bg-magwhite/80 shadow-sm bg-opacity-75 px-8 pt-10 pb-24 rounded-lg overflow-hidden relative">
        <motion.h2 className="tracking-widest text-xs title-font font-medium text-gray-900 mb-5">
          GETTING STARTED
        </motion.h2>
        <motion.h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-2">
          {item.title}
        </motion.h1>
        <motion.p className="leading-relaxed mb-3">{item.subtitle}</motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Card;
