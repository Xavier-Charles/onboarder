import q1 from "../../../assets/img/questions/greenfield/q1.png";
import q2 from "../../../assets/img/questions/greenfield/q2.png";
import q3 from "../../../assets/img/questions/greenfield/q3.png";
import q4 from "../../../assets/img/questions/greenfield/q4.png";

export const lesson1Questions = [
  {
    id: 1,
    title: "Truflation: The New Age of Economic Data",
    subtitle:
      "Aggregating, calculating and publishing unbiased, daily real-market inflation and economic data on-chain.",
    summary:
      "Truflation aims to revolutionize the way we understand the economic situation by providing daily, unbiased, and real-market inflation and economic data. By leveraging the Chainlink infrastructure, Truflation's data is made directly compatible with various DeFi products and Web3 applications. Their mission is to provide a decentralized, accurate, and current economic information alternative in the form of on-chain price indexes, and to promote DeFi's growth into the new era of inflation-proof products and an economy of independently verifiable data.",
    img: q1,
    question: "What is the primary mission of Truflation?",
    options: {
      1: { id: 1, value: "To create inflation-proof DeFi products" },
      2: {
        id: 2,
        value: "To provide daily, unbiased, real-market economic data",
      },
      3: { id: 3, value: "To launch its own cryptocurrency" },
    },
    answer: 2,
    classes: "lg:w-2/3",
  },

  {
    id: 2,
    title:
      "The Truflation Index: A Leap into Automated Economic Data Collection",
    subtitle:
      "Revolutionizing inflation data by offering automated, daily, objective, and decentralized updates.",
    summary:
      "The Truflation Index is an innovative approach to tracking inflation, aiming to deliver the most objective, decentralized, and regular updates on inflation rates. The first offerings are the US and UK Truflation indexes along with their contributing categories. It's an enhanced version of the CPI (Consumaer Price Inex), redesigned to accurately mirror consumer spending habits and real-market price alterations. With this new method, data is not manually collected through surveys from a small consumer sample, but automated and reported daily, paving the way for the decentralized economies of the future.",
    img: q2,
    question:
      "What is the primary advantage of the Truflation Index over the traditional CPI?",
    options: {
      1: { id: 1, value: "It's updated annually" },
      2: { id: 2, value: "It includes cryptocurrency inflation" },
      3: { id: 3, value: "It provides automated and daily updates" },
    },
    answer: 3,
    classes: "lg:w-1/3",
  },

  {
    id: 3,
    title: "Introducing the Truflation Oracle: On-Chain Inflation Data",
    subtitle:
      "Providing custom inflation index data through the Chainlink Oracle, accessible to compatible smart contracts.",
    summary:
      "The Truflation Oracle is an on-chain data feed that provides the Truflation Index through the Chainlink Oracle. Translated to blockchain programming languages, the Truflation Index API is served to this decentralized Oracle, making it available for compatible smart contracts. The Oracle utilizes the US Truflation Index to offer daily updates for projects and products aiming to adjust for the US dollar's diminishing value. Users can easily set up smart contracts calling the oracle values from the Truflation marketplace, with data available through Ethereum, Polygon, BNB Chain, Fantom, and Avalanche mainnet nodes and testnet nodes.",
    img: q3,
    question:
      "Which index does the Truflation Oracle use to provide daily updates?",
    options: {
      1: { id: 1, value: "CPI Index" },
      2: { id: 2, value: "US Truflation Index" },
      3: { id: 3, value: "UK Truflation Index" },
    },
    answer: 2,
    classes: "lg:w-1/3",
  },

  {
    id: 4,
    title: "The TFI Token: Powering Truflation's Data Economy",
    subtitle:
      "Facilitating unbiased on-chain economic data through incentivization, decentralization, and sustainability.",
    summary:
      "The TFI token helps solve the challenges associated with delivering unbiased financial and economic data on-chain. It fosters a data economy built on transparency and provides an ecosystem incentivizing data providers, analysts, curators, and validators to share, combine, and validate Truflation data. This ensures that Truflation remains independent, decentralized, and self-sustaining, thereby making it resilient, censorship-resistant, and unbiased. Furthermore, the TFI token contributes to the decentralization of data, governance, and verification processes.",
    img: q4,
    question:
      "What is the primary role of the TFI token in the Truflation ecosystem?",
    options: {
      1: { id: 1, value: "To increase the value of Truflation" },
      2: {
        id: 2,
        value: "To incentivize data providers and ensure decentralization",
      },
      3: { id: 3, value: "To offer discounts on Truflation services" },
    },
    answer: 2,
    classes: "lg:w-2/3",
  },
];
