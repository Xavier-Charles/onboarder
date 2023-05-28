import {
  GreenFieldHero,
  GreenFieldLesson1,
  GreenFieldLesson2,
} from "../partners/greenfield";

import {
  ThetaHero,
  ThetaLesson1,
  ThetaLesson2,
  ThetaLesson3,
} from "../partners/theta";

import {
  GnosisHero,
  GnosisLesson1,
  GnosisLesson2,
  GnosisLesson3,
} from "../partners/gnosis";

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
      SLUG: "theta",
      SEO: {
        TITLE:
          "Onboarder - Learn about the Theta Network's Video Infrastructure",
        DESCRIPTION:
          "Learn how to lower your cost to encode, store and deliver video with Theta's Video Infrastructure, in 5 steps with Onboarder.",
      },
      COMPONENTS: {
        HERO: ThetaHero,
        LESSON_ONE: ThetaLesson1,
        LESSON_TWO: ThetaLesson2,
        LESSON_THREE: ThetaLesson3,
      },
    },
    {
      SLUG: "gnosis",
      SEO: {
        TITLE: "Onboarder - Explore Gnosis Chain, the community run chain",
        DESCRIPTION:
          "Learn about one of the first Ethereum sidechains and has stayed true to its values, Gnosis Chain, in 5 steps with Onboarder.",
      },
      COMPONENTS: {
        HERO: GnosisHero,
        LESSON_ONE: GnosisLesson1,
        LESSON_TWO: GnosisLesson2,
        LESSON_THREE: GnosisLesson3,
      },
    },
  ],
};

export default CONFIG;
