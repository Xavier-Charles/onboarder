import q1 from "../../../assets/img/questions/theta/q1.png";
import q2 from "../../../assets/img/questions/theta/q2.png";
import q3 from "../../../assets/img/questions/theta/q3.png";
import q4 from "../../../assets/img/questions/theta/q4.png";

export const lesson1Questions = [
  {
    id: 1,
    title: "Introduction to Gnosis Chain",
    subtitle: "A brief overview of Gnosis Chain and its capabilities",
    summary:
      "Gnosis Chain, previously known as xDAI chain, is an Ethereum sidechain enabling application development, organization management, and asset transactions without central authority. It's characterized by fast, inexpensive transactions and compatibility with other Ethereum-based chains.",
    img: q1,
    question: "What was the previous name of Gnosis Chain?",
    options: {
      1: { id: 1, value: "Binance Smart Chain" },
      2: { id: 2, value: "xDAI Chain" },
      3: { id: 3, value: "Ethereum Chain" },
    },
    answer: 2,
    classes: "lg:w-2/3",
  },

  {
    id: 2,
    title: "Transaction Fees and Explorers in Gnosis",
    subtitle: "The cost of Gnosis transactions and the role of explorers",
    summary:
      "Gnosis Chain charges transaction fees, which are currently very low and awarded to the validator sealing the block. Explorers like Blockscout and Gnosisscan make it easier for users to search for blocks, transactions, and contracts.",
    img: q2,
    question: "What are some explorers supported by Gnosis Chain?",
    options: {
      1: { id: 1, value: "Etherscan and Bscscan" },
      2: { id: 2, value: "Blockscout and Gnosisscan" },
      3: { id: 3, value: "Polygonscan and Solscan" },
    },
    answer: 2,
    classes: "lg:w-1/3",
  },

  {
    id: 3,
    title: "CoW Protocol and Safe",
    subtitle: "Gnosis ecosystem components: CoW Protocol and Safe",
    summary:
      "CoW Protocol is a decentralized exchange in the Gnosis ecosystem that matches and executes trades. Safe, another component, is a multisignature wallet infrastructure that operates on the Ethereum network, supporting various tokens and DeFi platforms.",
    img: q3,
    question: "What does CoW stand for in the context of Gnosis Chain?",
    options: {
      1: { id: 1, value: "Coin of Wealth" },
      2: { id: 2, value: "Confidence of Wants" },
      3: { id: 3, value: "Certainty of Wishes" },
    },
    answer: 2,
    classes: "lg:w-2/3",
  },

  {
    id: 4,
    title: "Gnosis Chain and GnosisDAO",
    subtitle:
      "Understanding the Gnosis Chain mechanism and the role of GnosisDAO",
    summary:
      "Gnosis Chain uses the xDAI stablecoin for transactions and fees, with security maintained by the Gnosis Beacon Chain consensus layer. GnosisDAO is the steward of the Gnosis ecosystem, using Gnosis products to guide ecosystem development, support, and governance.",
    img: q4,
    question: "What consensus mechanism does Gnosis Beacon Chain use?",
    options: {
      1: { id: 1, value: "Proof of Work (PoW)" },
      2: { id: 2, value: "Proof of Stake (PoS)" },
      3: { id: 3, value: "Delegated Proof of Stake (DPoS)" },
    },
    answer: 2,
    classes: "lg:w-1/3",
  },
];
