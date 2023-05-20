import {
  GreenFieldHero,
  GreenFieldLesson1,
  GreenFieldLesson2,
} from "../partners/greenfield";

const CONFIG = {
  SEO: {
    TITLE: "Onboarder - Seamlessly Onboard to Web3 Products and Protocols",
    DESCRIPTION:
      "Onboarder is a Web3 onboarding solution that allows users to seamlessly onboard to decentralized products and protocols.",
  },
  PARTNERS_CONFIG: [
    {
      SLUG: "bnb-greenfield",
      SEO: {
        TITLE: "Onboarder - Learn Binance Smart Chain's BNB GreenField",
        DESCRIPTION:
          "Learn about the decentralized data storage system and economy - BnB Greenfield - in 5 steps with Onboarder.",
      },
      COMPONENTS: {
        HERO: GreenFieldHero,
        LESSON_ONE: GreenFieldLesson1,
        LESSON_TWO: GreenFieldLesson2,
      },
    },
  ],
};

export default CONFIG;
