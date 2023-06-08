import q1 from "../../../assets/img/questions/greenfield/q1.png";
import q2 from "../../../assets/img/questions/greenfield/q2.png";
import q3 from "../../../assets/img/questions/greenfield/q3.png";
import q4 from "../../../assets/img/questions/greenfield/q4.png";


export const lesson1Questions = [
  {
    id: 1,
    title: "Introduction to BNB Greenfield",
    subtitle:
      "Introducing Decentralized Storage for a New Data-Driven Economy in the Web3 Era",

    summary:
      "BNB Greenfield is the third blockchain in the BNB Chain ecosystem, providing decentralized storage infrastructure for users and decentralized applications (DApps). It aims to create a data-driven economy in the Web3 era, allowing participants in the BNB Chain ecosystem to own, use, and monetize data. BNB Greenfield addresses the need for decentralized storage, which enables data to be stored and accessed in a distributed manner rather than on a single centralized server.",
    img: q1,
    question: "What is the primary function of BNB Greenfield?",
    options: {
      1: { id: 1, value: "Decentralized finance platform" },
      2: { id: 2, value: "Decentralized storage infrastructure" },
    },
    answer: 2,
    classes: "lg:w-1/3",
  },

  {
    id: 2,
    title: "Decentralized Data Storage",
    subtitle:
      "Examining the Benefits and Advantages of Decentralized Data Storage Over Centralized Systems",

    summary:
      "Decentralized data storage offers better security, improved resilience, user freedom and control, increased privacy, and market efficiencies compared to centralized data storage. By distributing data across a network of computers, it becomes more difficult for hackers to access information, and the system is more resilient with no single point of failure. Users have greater control over their data, leading to enhanced privacy and the potential for a more sustainable, decentralized ecosystem.",
    img: q2,
    question:
      "Which of the following is NOT an advantage of decentralized data storage?",
    options: {
      1: { id: 1, value: "Increased privacy" },
      2: { id: 2, value: "Single point of failure" },
    },
    answer: 2,
    classes: "lg:w-2/3",
  },

  {
    id: 3,
    title: "BNB Greenfield's Functioning and Use Cases",
    subtitle:
      "Exploring BNB Greenfield's Wide Range of Innovative Applications and User Control Capabilities",

    summary:
      "BNB Greenfield interacts with a decentralized network of storage providers to store users' data with unique access and usage permissions. It can be used for a variety of applications, including website hosting, personal cloud storage, blockchain data storage, publishing, social media, and personal data markets. BNB Greenfield enables users to have full control over their data and allows for a wide array of business models benefiting both users and other participants in the ecosystem.",
    img: q3,
    question: "Which is NOT a use case for BNB Greenfield?",
    options: {
      1: { id: 1, value: "Personal data markets" },
      2: { id: 2, value: "Decentralized lending platform" },
    },
    answer: 2,
    classes: "lg:w-2/3",
  },

  {
    id: 4,
    title: "BNB Greenfield's Development and Future",
    subtitle:
      "Advancing Data Independence and Ownership for a Brighter, More Transparent Web3 Future",
    summary:
      "BNB Greenfield's launch is the first step towards greater data independence, ownership, and opportunity for users, builders, and the broader Web3 community. As of February 2023, BNB Chain's core developer team is working on BNB Greenfield with plans for a testnet in the coming months. BNB Greenfield is designed to be inclusive for both Web2 and Web3 communities, and its arrival has the potential to open the floodgates to an entirely new wave of novel, innovative, and transparent Web3 business models for DApps.",
    img: q4,
    question: "What is the main goal of BNB Greenfield?",
    options: {
      1: { id: 1, value: "Unlocking Web3's full potential" },
      2: { id: 2, value: "Creating a centralized data storage platform" },
    },
    answer: 1,
    classes: "lg:w-1/3",
  },
];
