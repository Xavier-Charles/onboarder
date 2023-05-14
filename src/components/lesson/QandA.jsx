import clsx from 'clsx';
import { motion } from 'framer-motion';

const QandA = ({
  selectedItem,
  selectedOptionId,
  setSelectedOptionId,
  setCardProgress,
}) => {
  return (
    <>
      {Object.values(selectedItem.options).map((option) => {
        const optionSelected =
          selectedOptionId && selectedOptionId === option.id;
        const isCorrect = selectedItem.answer === option.id;
        return (
          <motion.button
            key={option.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setSelectedOptionId(option.id);
              if (isCorrect) {
                setCardProgress((prev) => {
                  return prev.map((item) => {
                    if (item.id === selectedItem.id) {
                      return {
                        ...item,
                        completed: true,
                      };
                    }
                    return item;
                  });
                });
              }
            }}
            className={clsx(
              "col-span-1 divide-y my-2 divide-gray-200 rounded-lg bg-magwhite shadow w-[90%]",
              optionSelected && (isCorrect ? "bg-teal" : "bg-red-500")
            )}
          >
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <h3
                className={clsx(
                  "truncate text-sm font-medium",
                  optionSelected && "text-magwhite"
                )}
              >
                {option.value}
              </h3>
            </div>
          </motion.button>
        );
      })}
    </>
  );
};

export default QandA