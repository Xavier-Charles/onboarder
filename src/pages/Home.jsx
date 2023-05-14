import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import Quests from "../components/Quests";
import { Learn } from "../components/Learn";
import { Footer } from "../components/Footer";
import { scrollToTop } from "../utils/scrollTo";

export default function Home() {
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <article>
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
      <main>
        <Hero />
        <Learn />
        <Quests />
      </main>
      <Footer />
    </article>
  );
}
