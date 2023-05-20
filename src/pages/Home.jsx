import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import Quests from "../components/Quests";
import { Learn } from "../components/Learn";
import { Footer } from "../components/Footer";
import { scrollToTop } from "../utils/scrollTo";
import CONFIG from "../config";

const { TITLE, DESCRIPTION } = CONFIG.SEO;

export default function Home() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <article>
      <Helmet>
        <title>{TITLE}</title>
        <meta name="description" content={DESCRIPTION} />
      </Helmet>
      <Header />
      <main>
        <Hero />
        <Learn />
        <Quests />
      </main>
      <Footer />
    </article>
  );
}
