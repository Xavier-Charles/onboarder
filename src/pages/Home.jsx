import { Helmet } from "react-helmet";
// import { CallToAction } from "../components/CallToAction";
// import { Faqs } from "../components/Faqs";
// import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
// import { Hero } from "../components/Hero";
// import { PrimaryFeatures } from "../components/PrimaryFeatures";
// import { SecondaryFeatures } from "../components/SecondaryFeatures";
// import { Testimonials } from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>
          Onboarder - Seamlessly Onboard to Decentralized Products and Protocols
        </title>
        <meta
          name="description"
          content="Onboarder is a decentralized onboarding solution that allows users to seamlessly onboard to decentralized products and protocols."
        />
      </Helmet>
      <Header />
      <main>
        {/* <Hero /> */}
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
