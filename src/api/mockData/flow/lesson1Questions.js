import q1 from "../../../assets/img/questions/theta/q1.png";
import q2 from "../../../assets/img/questions/theta/q2.png";
import q3 from "../../../assets/img/questions/theta/q3.png";
import q4 from "../../../assets/img/questions/theta/q4.png";

export const lesson1Questions = [
  {
    id: 1,
    title: "Understanding Flow",
    subtitle: "Exploring the unique aspects of Flow blockchain technology",
    summary:
      "Flow is a proof-of-stake blockchain designed to be foundational to Web3 and the open metaverse. It is powered by Cadence, a language designed for digital assets, and is designed to support consumer-scale decentralized applications, NFTs, DeFi, DAOs, PFP projects, and more.",
    img: q1,
    question: "What is Flow blockchain primarily designed for?",
    options: {
      1: { id: 1, value: "Traditional banking systems" },
      2: { id: 2, value: "Web3 and the open metaverse" },
      3: { id: 3, value: "E-commerce websites" },
    },
    answer: 2,
    classes: "lg:w-2/3",
  },
  {
    id: 2,
    title: "Flow's Unique Scalability Approach",
    subtitle: "Flow's solution to the scalability trilemma problem",
    summary:
      "Flow uses a unique multi-node architecture to handle scalability without compromising on security or decentralisation. It divides the workload among different groups of nodes, each specialized for specific tasks. This allows Flow to maintain full ACID guarantees and network effects.",
    img: q2,
    question: "How does Flow solve the scalability trilemma?",
    options: {
      1: { id: 1, value: "Using homogenous node structure" },
      2: { id: 2, value: "Through sharding" },
      3: { id: 3, value: "Using multi-node architecture" },
    },
    answer: 3,
    classes: "lg:w-1/3",
  },
  {
    id: 3,
    title: "Scalability Trilemma Explained",
    subtitle: "Understanding how Flow tackles the Scalability Trilemma",
    summary:
      "Flow doesn't disprove the Scalability Trilemma; instead, it navigates around it. It allows different nodes to participate in different roles, choosing the right trade-offs for each part of the system, thereby maximizing security, decentralization, and scalability.",
    img: q3,
    question: "How does Flow approach the Scalability Trilemma?",
    options: {
      1: { id: 1, value: "Disproves the Trilemma" },
      2: { id: 2, value: "Ignores the Trilemma" },
      3: { id: 3, value: "Navigates around the Trilemma" },
    },
    answer: 3,
    classes: "lg:w-1/3",
  },
  {
    id: 4,
    title: "Introduction to SPoCKs",
    subtitle: "Specialized Proofs of Confidential Knowledge (SPoCKs)",
    summary:
      "SPoCKs, developed by the Flow team, are a cryptographic technique that allows any number of provers to demonstrate to an observer that they each have access to the same confidential knowledge without revealing the information itself. Flow uses SPoCKs to ensure all transactions are executed correctly.",
    img: q4,
    question: "What are SPoCKs used for in Flow?",
    options: {
      1: { id: 1, value: "To create new tokens" },
      2: { id: 2, value: "To demonstrate access to confidential knowledge" },
      3: { id: 3, value: "To design new smart contracts" },
    },
    answer: 2,
    classes: "lg:w-2/3",
  },
];
