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

import {
  MantleHero,
  MantleLesson1,
  MantleLesson2,
  MantleLesson3,
} from "../partners/mantle";

import {
  SpaceTimeHero,
  SpaceTimeLesson1,
  SpaceTimeLesson2,
} from "../partners/spaceTime";

import {
  TruflationHero,
  TruflationLesson1,
  TruflationLesson2,
} from "../partners/truflation";

import {
  FlowHero,
  FlowLesson1,
  FlowLesson2,
  FlowLesson3,
} from "../partners/flow";

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
    {
      SLUG: "mantle",
      SEO: {
        TITLE:
          "Onboarder - Explore Mantle Network, an Ethereum rollup with exceptional UX",
        DESCRIPTION:
          "Learn about one of the first Ethereum sidechains and has stayed true to its values, Mantle Chain, in 5 steps with Onboarder.",
      },
      COMPONENTS: {
        HERO: MantleHero,
        LESSON_ONE: MantleLesson1,
        LESSON_TWO: MantleLesson2,
        LESSON_THREE: MantleLesson3,
      },
    },
    {
      SLUG: "space-time",
      SEO: {
        TITLE:
          "Onboarder - Explore Space and Time, a decentralized data warehouse",
        DESCRIPTION:
          "Learn about one the first data warehouse that connects on-chain and off-chain data, Space and Time, in 5 steps with Onboarder.",
      },
      COMPONENTS: {
        HERO: SpaceTimeHero,
        LESSON_ONE: SpaceTimeLesson1,
        LESSON_TWO: SpaceTimeLesson2,
      },
    },
    {
      SLUG: "flow",
      SEO: {
        TITLE:
          "Onboarder - Explore Flow Blockchain, a permissionless layer 1 blockchain,",
        DESCRIPTION:
          "Learn about a highly scalable permissionless blockchain designed for massive throughput, Flow, in 5 steps with Onboarder.",
      },
      COMPONENTS: {
        HERO: FlowHero,
        LESSON_ONE: FlowLesson1,
        LESSON_TWO: FlowLesson2,
        LESSON_THREE: FlowLesson3,
      },
    },
    {
      SLUG: "truflation",
      SEO: {
        TITLE:
          "Onboarder - Explore Truflation, an unbiased, real-market inflation and economic data aggregator",
        DESCRIPTION:
          "Learn about an unbiased, real-market inflation and economic data aggregator, Truflation, in 5 steps with Onboarder.",
      },
      COMPONENTS: {
        HERO: TruflationHero,
        LESSON_ONE: TruflationLesson1,
        LESSON_TWO: TruflationLesson2,
      },
    },
  ],
};

export default CONFIG;
