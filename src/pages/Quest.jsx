import TransitionAnimation from "../components/transitions/TransitionAnimationX";
import Hero from "../components/quest/Hero";
import { Helmet } from "react-helmet";
import { Header } from "../components/Header";
import CONFIG from "../config";
import useScrollToTop from "../hooks/useScrollToTop";

const { TITLE, DESCRIPTION } = CONFIG.PARTNERS_CONFIG.GREEN_FIELD.SEO;

const Quest = () => {
  useScrollToTop();

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
