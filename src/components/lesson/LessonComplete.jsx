import { motion } from "framer-motion";
import lessonCompleteImg from "../../assets/img/lessonComplete.png";

const LessonComplete = ({ onLessonComplete, lessonId, resetCardProgress }) => {
  return (
    <div className="fixed z-20 inset-0 hidden md:flex justify-center items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 hidden bg-jetbrown bg-opacity-70 transition-opacity md:block"
        // onClick={onCloseModal} // TODO You should be able to close the modal by clicking outside of it.
      />
      <motion.div>
        <div className="flex w-full justify-center transform text-left text-base transition md:my-8 md:max-w-xl md:px-4 lg:max-w-2xl">
          <div className="relative flex flex-col w-full items-center overflow-hidden bg-slate rounded-xl px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
            <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
              <div className="sm:col-span-4 lg:col-span-5">
                <div className="relative aspect-h-1 aspect-w-1 overflow-hidden">
                  <img
                    src={lessonCompleteImg}
                    alt="lesson"
                    className="object-cover object-center"
                  />
                </div>
              </div>
              <div className="sm:col-span-8 lg:col-span-7">
                <motion.h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                  Lesson {lessonId} Complete !!!
                </motion.h2>

                <section aria-labelledby="information-heading" className="mt-4">
                  <div className="flex items-center">
                    <p className="text-lg text-gray-900 sm:text-lg">
                      You aced the lesson. You are now ready to move on to the
                      next lesson.
                    </p>
                  </div>

                  <motion.button
                    onClick={() => {
                      onLessonComplete((prev) =>
                        prev > lessonId ? prev : lessonId + 1
                      );
                      resetCardProgress();
                    }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="rounded-md mt-12 bg-teal/90 px-5 py-3.5 font-semibold text-magwhite shadow-sm hover:bg-teal focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal"
                  >
                    Lesson {lessonId + 1}
                  </motion.button>
                </section>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default LessonComplete;
