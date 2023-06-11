import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactHtmlParser from "react-html-parser";
import Card from "../../components/lesson/Card";
import { lesson3Questions } from "../../api/mockData/mantle/lesson3Questions";
import clsx from "clsx";
import useClickOutside from "../../hooks/useClickOutside";
import CardNav from "../../components/lesson/CardNav";
import LessonComplete from "../../components/lesson/LessonComplete";
import QandA from "../../components/lesson/QandA";
import Verify from "../../components/lesson/Verify";
import ParticlesConfetti from "../../components/ConfettiParticles";

const BlockQuoteSVG = ({ classes }) => (
  <svg
    viewBox="0 0 162 128"
    fill="none"
    aria-hidden="true"
    className={clsx("absolute top-0 -z-10 h-20 stroke-magwhite/20", classes)}
  >
    <path
      id="b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb"
      d="M65.5697 118.507L65.8918 118.89C68.9503 116.314 71.367 113.253 73.1386 109.71C74.9162 106.155 75.8027 102.28 75.8027 98.0919C75.8027 94.237 75.16 90.6155 73.8708 87.2314C72.5851 83.8565 70.8137 80.9533 68.553 78.5292C66.4529 76.1079 63.9476 74.2482 61.0407 72.9536C58.2795 71.4949 55.276 70.767 52.0386 70.767C48.9935 70.767 46.4686 71.1668 44.4872 71.9924L44.4799 71.9955L44.4726 71.9988C42.7101 72.7999 41.1035 73.6831 39.6544 74.6492C38.2407 75.5916 36.8279 76.455 35.4159 77.2394L35.4047 77.2457L35.3938 77.2525C34.2318 77.9787 32.6713 78.3634 30.6736 78.3634C29.0405 78.3634 27.5131 77.2868 26.1274 74.8257C24.7483 72.2185 24.0519 69.2166 24.0519 65.8071C24.0519 60.0311 25.3782 54.4081 28.0373 48.9335C30.703 43.4454 34.3114 38.345 38.8667 33.6325C43.5812 28.761 49.0045 24.5159 55.1389 20.8979C60.1667 18.0071 65.4966 15.6179 71.1291 13.7305C73.8626 12.8145 75.8027 10.2968 75.8027 7.38572C75.8027 3.6497 72.6341 0.62247 68.8814 1.1527C61.1635 2.2432 53.7398 4.41426 46.6119 7.66522C37.5369 11.6459 29.5729 17.0612 22.7236 23.9105C16.0322 30.6019 10.618 38.4859 6.47981 47.558L6.47976 47.558L6.47682 47.5647C2.4901 56.6544 0.5 66.6148 0.5 77.4391C0.5 84.2996 1.61702 90.7679 3.85425 96.8404L3.8558 96.8445C6.08991 102.749 9.12394 108.02 12.959 112.654L12.959 112.654L12.9646 112.661C16.8027 117.138 21.2829 120.739 26.4034 123.459L26.4033 123.459L26.4144 123.465C31.5505 126.033 37.0873 127.316 43.0178 127.316C47.5035 127.316 51.6783 126.595 55.5376 125.148L55.5376 125.148L55.5477 125.144C59.5516 123.542 63.0052 121.456 65.9019 118.881L65.5697 118.507Z"
    />
    <use href="#b56e9dab-6ccb-4d32-ad02-6b4bb5d9bbeb" x="86" />
  </svg>
);

const MantleLesson3 = ({ onLessonComplete }) => {
  const [selectedId, setSelectedId] = useState(null);
  const [cardProgress, setCardProgress] = useState(
    lesson3Questions.map((item) => ({ id: item.id, completed: false }))
  );
  const [showCardQA, setShowCardQA] = useState(false);
  const [selectedOptionId, setSelectedOptionId] = useState(null);

  const containerRef = useClickOutside(() => {});

  const selectedItem = lesson3Questions.find((item) => item.id === selectedId);

  const onCloseModal = () => {
    setSelectedId(null);
    setSelectedOptionId(null);
    setShowCardQA(false);
  };

  const allCompleted = cardProgress.every((item) => item.completed);

  return (
    <section id="l2" className="text-gray-600 body-font">
      <div className="container px-5 py-24 pt-32 mx-auto max-w-7xl">
        <figure className="relative isolate flex justify-center">
          <BlockQuoteSVG classes="rotate-[170deg] transform scale-x-[-1] scale-y-[1] -ml-[36%] mt-10" />
          <BlockQuoteSVG classes="ml-[26%] rotate-[160deg] -mt-11" />
          <h1 className="mt-2 text-center text-3xl font-sans font-semibold pb-10 tracking-tight text-magwhite sm:text-6xl">
            Deploy a contract to Mantle Wadsley
          </h1>
        </figure>
        <div className="flex flex-wrap justify-center">
          {Object.values(lesson3Questions).map((item) => (
            <Card
              item={item}
              lesson="DEPLOYMENT"
              key={item.id}
              setSelectedId={setSelectedId}
              layoutId={`l2-${item.id}`}
              type={item.type}
              isCompleted={
                cardProgress.find((pItem) => pItem.id === item.id)?.completed
              }
            />
          ))}
        </div>
      </div>
      <AnimatePresence>
        {selectedId && (
          <div className="fixed z-20 inset-0 hidden md:flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 hidden bg-jetbrown bg-opacity-70 transition-opacity md:block"
              onClick={onCloseModal}
            />
            <motion.div
              className="relative"
              ref={containerRef}
              layoutId={`l2-${selectedId}`}
            >
              <div className="flex w-full justify-center transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                <div className="relative flex flex-col w-full items-center overflow-hidden bg-slate rounded-xl px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                  <motion.button
                    onClick={onCloseModal}
                    type="button"
                    className="absolute right-4 top-4 text-jetbrown80 hover:text-jetbrown sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </motion.button>
                  <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
                    <div className="sm:col-span-4 lg:col-span-5">
                      <div className="relative aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100">
                        <img
                          src={selectedItem.img}
                          alt="lesson"
                          className="object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-8 lg:col-span-7">
                      <motion.h2 className="text-2xl font-bold text-gray-900 sm:pr-12">
                        {selectedItem[showCardQA ? "question" : "title"]}
                      </motion.h2>

                      <section
                        aria-labelledby="information-heading"
                        className="mt-4"
                      >
                        {showCardQA ? (
                          <>
                            {selectedItem.type?.includes("verify") ? (
                              <Verify
                                selectedItem={selectedItem}
                                selectedOptionId={selectedOptionId}
                                setSelectedOptionId={setSelectedOptionId}
                                setCardProgress={setCardProgress}
                              />
                            ) : (
                              <QandA
                                selectedItem={selectedItem}
                                selectedOptionId={selectedOptionId}
                                setSelectedOptionId={setSelectedOptionId}
                                setCardProgress={setCardProgress}
                              />
                            )}
                          </>
                        ) : (
                          <div className="flex items-center">
                            <p className="text-lg text-gray-900 sm:text-lg">
                              {ReactHtmlParser(selectedItem.summary)}
                            </p>
                          </div>
                        )}
                      </section>
                    </div>
                    <ParticlesConfetti cardProgress={cardProgress} />
                  </div>
                  <div className="mt-6 sm:mt-8">
                    <CardNav
                      showCardQA={showCardQA}
                      setShowCardQA={setShowCardQA}
                      type={selectedItem.type}
                      isCompleted={
                        cardProgress.find((item) => item.id === selectedItem.id)
                          ?.completed
                      }
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
      {allCompleted && (
        <LessonComplete onLessonComplete={onLessonComplete} lessonId={3} />
      )}
    </section>
  );
};

export default MantleLesson3;
