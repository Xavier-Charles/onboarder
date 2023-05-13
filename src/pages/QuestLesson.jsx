import { useEffect } from "react";
import TransitionAnimation from "../components/transitions/TransitionAnimationY";
import { Helmet } from "react-helmet";
import { Header } from "../components/Header";
import { scrollToTop } from "../utils/scrollToTop";
import Lesson1 from "../components/lesson/Lesson1";

const Quest = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

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
      <Lesson1 />
      <TransitionAnimation />
    </section>
  );
};

export default Quest;
