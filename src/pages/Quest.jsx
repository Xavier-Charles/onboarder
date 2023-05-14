import { useEffect } from "react";
import TransitionAnimation from "../components/transitions/TransitionAnimationX";
import Hero from "../components/quest/hero";
import { Helmet } from "react-helmet";
import { Header } from "../components/Header";
import { scrollToTop } from "../utils/scrollTo";

const Quest = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <section>
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
      <Hero />
      <TransitionAnimation />
    </section>
  );
};

export default Quest;
