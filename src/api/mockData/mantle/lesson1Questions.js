import q1 from "../../../assets/img/questions/theta/q1.png";
import q2 from "../../../assets/img/questions/theta/q2.png";
import q3 from "../../../assets/img/questions/theta/q3.png";
import q4 from "../../../assets/img/questions/theta/q4.png";

export const lesson1Questions = [
  {
    id: 1,
    title: "Introduction to Mantle",
    subtitle:
      "Understanding what Mantle is and its main aim as a technology stack",
    summary:
      "Mantle is a technology stack for scaling Ethereum, striving for EVM compatibility. Mantle offers an efficient, low-fee environment for developers to deploy smart contracts and users to experiment with web3 apps.",
    img: q1,
    question: "What is the primary objective of Mantle?",
    options: {
      1: { id: 1, value: "Scaling Bitcoin" },
      2: { id: 2, value: "Scaling Ethereum" },
      3: { id: 3, value: "Creating a new cryptocurrency" },
    },
    answer: 2,
    classes: "lg:w-1/3",
  },
  {
    id: 2,
    title: "Mantle on Ethereum",
    subtitle:
      "Exploring the key differences between Mantle and Ethereum, and the advantages Mantle has",
    summary:
      "Mantle, a Layer 2 scalability solution, is built on top of Ethereum. It uses a compressed block technique to save on gas fees and increase total transaction throughput, while inheriting Ethereum's security and infrastructure.",
    img: q2,
    question: "What does Mantle inherit from Ethereum?",
    options: {
      1: { id: 1, value: "Security and infrastructure" },
      2: { id: 2, value: "Cryptocurrency value" },
      3: { id: 3, value: "Ethereum's user base" },
    },
    answer: 1,
    classes: "lg:w-2/3",
  },
  {
    id: 3,
    title: "Mantle's Key Innovations",
    subtitle:
      "Highlighting the unique features and improvements that Mantle brings to Layer 2 solutions",
    summary:
      "Mantle's improvements include modular data availability via EigenLayer, use of Multi-Party Computation (MPC) to minimize trust risk, and a decentralized sequencer for secure and trustless block production. These features make Mantle more secure, efficient, and promote increased decentralization.",
    img: q3,
    question: "Which of the following is NOT an innovation of Mantle?",
    options: {
      1: { id: 1, value: "Modular Data Availability" },
      2: { id: 2, value: "Decentralized Sequencer" },
      3: { id: 3, value: "Real-time transaction processing" },
    },
    answer: 3,
    classes: "lg:w-1/3",
  },
  {
    id: 4,
    title: "Getting Started with Mantle",
    subtitle:
      "Information on how to get involved with Mantle and its partnerships",
    summary:
      "Mantle is developed in partnership with BitDAO, Bybit, and other organizations to meet the needs of the growing $BIT ecosystem.",
    img: q4,
    question: "Who is one of Mantle's partners?",
    options: {
      1: { id: 1, value: "Coinbase" },
      2: { id: 2, value: "BitDAO" },
      3: { id: 3, value: "Binance" },
    },
    answer: 2,
    classes: "lg:w-2/3",
  },
];
