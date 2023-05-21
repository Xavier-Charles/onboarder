import { Helmet } from "react-helmet";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import Quests from "../components/Quests";
import { Learn } from "../components/Learn";
import { Footer } from "../components/Footer";
import CONFIG from "../config";
import useScrollToTop from "../hooks/useScrollToTop";

const { TITLE, DESCRIPTION } = CONFIG.SEO;

export default function Home() {
  useScrollToTop();

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
