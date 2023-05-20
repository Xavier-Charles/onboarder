import { useEffect } from "react";
import TransitionAnimation from "../components/transitions/TransitionAnimationX";
import Hero from "../components/quest/Hero";
import { Helmet } from "react-helmet";
import { Header } from "../components/Header";
import { scrollToTop } from "../utils/scrollTo";
import CONFIG from "../config";

const { TITLE, DESCRIPTION } = CONFIG.PARTNERS_CONFIG.GREEN_FIELD.SEO;

const Quest = () => {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <section>
      <Helmet>
        <title>{TITLE} </title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <Header />
      <Hero />
      <TransitionAnimation />
    </section>
  );
};

export default Quest;
