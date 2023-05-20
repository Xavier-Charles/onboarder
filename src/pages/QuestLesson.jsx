import { useEffect, useState } from "react";
import TransitionAnimation from "../components/transitions/TransitionAnimationY";
import { Helmet } from "react-helmet";
import { Header } from "../components/Header";
import { scrollToElement } from "../utils/scrollTo";
import Lesson1 from "../components/lesson/Lesson1";
import Lesson2 from "../components/lesson/Lesson2";
import { AnimatePresence, motion } from "framer-motion";
import useScrollToTop from "../hooks/useScrollToTop";

const Quest = () => {
  const [lessonProgress, setLessonProgress] = useState(1);

  useScrollToTop();

  useEffect(() => {
    if (lessonProgress > 1) {
      scrollToElement("l2");
    }
  }, [lessonProgress]);

  return (
    <section className="min-h-screen min-w-screen grad-l1">
      <Helmet>
        <title>
          Onboarder - Seamlessly Onboard to Web3 Products and Protocols
        </title>
        <meta
          name="description"
          content="Onboarder is a Web3 onboarding solution that allows users to seamlessly onboard to decentralized products and protocols."
        />
      </Helmet>
      <Header />
      <AnimatePresence mode="wait">
        {lessonProgress === 1 && (
          <motion.div
            key="lesson1-quest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Lesson1 onLessonComplete={setLessonProgress} />
          </motion.div>
        )}
        {lessonProgress === 2 && (
          <motion.div
            key="lesson2-quest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Lesson2 onLessonComplete={setLessonProgress} />
          </motion.div>
        )}
      </AnimatePresence>
      <TransitionAnimation />
    </section>
  );
};

export default Quest;
