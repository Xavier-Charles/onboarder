import {
  GreenFieldHero,
  GreenFieldLesson1,
  GreenFieldLesson2,
} from "../partners/greenfield";

import {
  ThetaVideoHero,
  ThetaVideoLesson1,
  ThetaVideoLesson2,
} from "../partners/theta";

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
    {
      SLUG: "theta-video",
      SEO: {
        TITLE:
          "Onboarder - Learn about the Theta Network's Video Infrastructure",
        DESCRIPTION:
          "Learn how to lower your cost to encode, store and deliver video with Theta's Video Infrastructure, in 5 steps with Onboarder.",
      },
      COMPONENTS: {
        HERO: ThetaVideoHero,
        LESSON_ONE: ThetaVideoLesson1,
        LESSON_TWO: ThetaVideoLesson2,
      },
    },
  ],
};

export default CONFIG;
