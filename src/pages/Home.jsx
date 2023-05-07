import { Helmet } from "react-helmet";
// import { CallToAction } from "../components/CallToAction";
// import { Faqs } from "../components/Faqs";
// import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import Quests from "../components/Quests";
// import { PrimaryFeatures } from "../components/PrimaryFeatures";
// import { SecondaryFeatures } from "../components/SecondaryFeatures";
// import { Testimonials } from "../components/Testimonials";

export default function Home() {
  return (
    <>
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
        <Quests />
        {/* <PrimaryFeatures /> */}
        {/* <SecondaryFeatures /> */}
        {/* <CallToAction /> */}
        {/* <Testimonials /> */}
        {/* <Faqs /> */}
      </main>
      {/* <Footer /> */}
    </>
  );
}
