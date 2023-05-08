import { Helmet } from "react-helmet";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import Quests from "../components/Quests";
import { Learn } from "../components/Learn";
import { Footer } from "../components/Footer";
import { useIsPresent, motion } from "framer-motion";

export default function Home() {
  const isPresent = useIsPresent();

  return (
    <div>
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
      <motion.div
        key="home-motion"
        initial={{ scaleX: 1 }}
        animate={{ scaleX: 0, transition: { duration: 0.5, ease: "circOut" } }}
        exit={{ scaleX: 1, transition: { duration: 0.5, ease: "circIn" } }}
        style={{ originX: isPresent ? 0 : 1 }}
        className="fixed top-0 left-0 right-0 bottom-0 z-10 bg-teal"
      />
    </div>
  );
}
