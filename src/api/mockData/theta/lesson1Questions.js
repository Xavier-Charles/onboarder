import q1 from "../../../assets/img/questions/theta/q1.png";
import q2 from "../../../assets/img/questions/theta/q2.png";
import q3 from "../../../assets/img/questions/theta/q3.png";
import q4 from "../../../assets/img/questions/theta/q4.png";

export const lesson1Questions = [
  {
    id: 1,
    title: "Introduction to Theta Network",
    subtitle: "What is Theta Network and its core functionality?",
    summary:
      "Theta Network is a next generation media and entertainment focused blockchain that provides infrastructure for video and media platforms. It supports Turing complete smart contracts and is compatible with Ethereum. This facilitates a broad array of Web3 applications to be developed on Theta Network such as NFTs, DEX/DeFi, and DAOs.",
    img: q1,
    question: "What is Theta Network?",
    options: {
      1: { id: 1, value: "A video streaming platform" },
      2: {
        id: 2,
        value: "A next generation media and entertainment focused blockchain",
      },
      3: { id: 3, value: "An online gaming platform" },
    },
    answer: 2,
    classes: "lg:w-2/3",
  },
  {
    id: 2,
    title: "Theta Blockchain",
    subtitle: "Unique Consensus Mechanism, Fast and Green",
    summary:
      "The Theta Blockchain is designed for the media and entertainment industry with a unique multi-level BFT consensus design. It combines 20–30 Enterprise Validator Nodes with thousands of community-run Guardian Nodes. This consensus mechanism allows the Theta Blockchain to be highly decentralized, able to process 1,000 transactions per second, and produce virtually zero carbon footprint.",
    img: q2,
    question:
      "What is unique about the Theta Blockchain's consensus mechanism?",
    options: {
      1: { id: 1, value: "It uses Proof of Work" },
      2: { id: 2, value: "It has a multi-level BFT consensus design" },
      3: { id: 3, value: "It uses Proof of Stake" },
    },
    answer: 2,
    classes: "lg:w-1/3",
  },
  {
    id: 3,
    title: "Dual Network Structure of Theta Network",
    subtitle: "What is the dual network structure of Theta?",
    summary:
      "Theta Network consists of two complementary subsystems, the Theta Blockchain and the Theta Edge Network. The Theta blockchain provides payment, reward, and smart contract capabilities, while the edge network handles the storage and delivery of media assets like images and videos.",
    img: q3,
    question:
      "Which subsystem of Theta Network handles media storage and delivery?",
    options: {
      1: { id: 1, value: "Theta Blockchain" },
      2: { id: 2, value: "Theta Edge Network" },
      3: { id: 3, value: "Neither" },
    },
    answer: 2,
    classes: "lg:w-1/3",
  },
  // {
  //   id: 4,
  //   title: "Theta Blockchain Features",
  //   subtitle: "What are the features of the Theta Blockchain?",
  //   summary:
  //     "Theta Blockchain has a unique multi-level BFT consensus design, providing security, high decentralization, and ability to process 1,000 transactions per second. The blockchain supports Turing-complete smart contracts and is compatible with the Ethereum Virtual Machine, thus, facilitating easy migration of Ethereum-based contracts.",
  //   img: "https://example.com/images/theta_blockchain.png",
  //   question:
  //     "What is the transaction capacity of Theta Blockchain per second?",
  //   options: {
  //     1: { id: 1, value: "100 transactions" },
  //     2: { id: 2, value: "1,000 transactions" },
  //     3: { id: 3, value: "10,000 transactions" },
  //   },
  //   answer: 2,
  // },

  // {
  //   id: 3,
  //   title: "Theta Network - Not a Decentralized YouTube",
  //   subtitle: "Underlying Infrastructure for the Next Generation",
  //   summary:
  //     "Contrary to some misconceptions, Theta Network is not a decentralized Youtube or Twitch. Instead, it serves as the underlying blockchain and decentralized storage/delivery infrastructure that powers the next generation Web3 video streaming and media entertainment platforms.",
  //   img: "https://images.unsplash.com/photo-1534534783872-2327e1f9ce53",
  //   question: "What is Theta Network NOT?",
  //   options: {
  //     1: { id: 1, value: "A Decentralized YouTube" },
  //     2: { id: 2, value: "A Video Game Platform" },
  //     3: { id: 3, value: "An E-commerce Platform" },
  //   },
  //   answer: 1,
  // },
  {
    id: 4,
    title: "Theta's EVM Compatibility",
    subtitle: "Porting Over Existing Ethereum-Based Contracts",
    summary:
      "Theta blockchain mainnet provides full support for Turing-complete smart contracts, opening up new user experiences and attribution models for DApps. The Theta Virtual Machine is compatible with the Ethereum Virtual Machine (EVM), making it simple to port over existing Ethereum-based contracts. With Theta's support for the Ethereum RPC API, Ethereum DApps can be deployed to Theta with minimal modifications.",
    img: q4,
    question:
      "What does Theta's compatibility with the Ethereum Virtual Machine (EVM) enable?",
    options: {
      1: { id: 1, value: "Porting over existing Ethereum-based contracts" },
      2: { id: 2, value: "Support for Bitcoin-based contracts" },
      3: { id: 3, value: "Incompatibility with other blockchains" },
    },
    answer: 1,
    classes: "lg:w-2/3",
  },
];
