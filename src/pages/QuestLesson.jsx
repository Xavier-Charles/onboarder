import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import TransitionAnimation from "../components/transitions/TransitionAnimationY";
import { Header } from "../components/Header";
import { scrollToElement } from "../utils/scrollTo";
import { AnimatePresence, motion } from "framer-motion";
import useScrollToTop from "../hooks/useScrollToTop";
import usePartner from "../hooks/usePartner";
import Javier from "../components/Javier";

const Quest = () => {
  const [lessonProgress, setLessonProgress] = useState(1);
  const PARTNER_CONFIG = usePartner();
  useScrollToTop();

  useEffect(() => {
    if (lessonProgress > 1) {
      scrollToElement("l2");
    }
  }, [lessonProgress]);

  if (!PARTNER_CONFIG) {
    return <div>404</div>;
  }

  const {
    COMPONENTS: { LESSON_ONE, LESSON_TWO, LESSON_THREE },
  } = PARTNER_CONFIG;

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
            <LESSON_ONE onLessonComplete={setLessonProgress} />
          </motion.div>
        )}
        {lessonProgress === 2 && (
          <motion.div
            key="lesson2-quest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LESSON_TWO onLessonComplete={setLessonProgress} />
          </motion.div>
        )}
        {lessonProgress === 3 && LESSON_THREE && (
          <motion.div
            key="lesson2-quest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LESSON_THREE onLessonComplete={setLessonProgress} />
          </motion.div>
        )}
      </AnimatePresence>
      <TransitionAnimation />
      <Javier />
    </section>
  );
};

export default Quest;
