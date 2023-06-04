import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import CompletedCheckBox from "./CompletedCheckBox";

// TODO Replace clsx with twMerge

const Card = ({ item, setSelectedId, isCompleted, layoutId, type, lesson }) => {
  return (
    <motion.div
      layoutId={layoutId}
      className={twMerge(
        "p-4 pb-5 w-full lg:w-1/3 cursor-pointer",
        item.classes
      )}
      onClick={() => {
        setSelectedId(item.id);
      }}
    >
      <motion.div className="h-full bg-magwhite/80 shadow-sm bg-opacity-75 px-8 pt-10 pb-24 rounded-lg overflow-hidden relative">
        <div className="flex justify-between w-full items-center">
          <motion.h2 className="tracking-widest text-xs title-font font-medium text-gray-900 mb-5">
            {lesson}
          </motion.h2>
          {isCompleted && <CompletedCheckBox classes="h-4 w-4" />}
        </div>
        <motion.h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-2">
          {item.title}
        </motion.h1>
        <motion.p className="leading-relaxed mb-3">{item.subtitle}</motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Card;
