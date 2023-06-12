import q5 from "../../../assets/img/questions/greenfield/q5.png";
import q6 from "../../../assets/img/questions/flow/q6.jpg";
import q7 from "../../../assets/img/questions/flow/q7.jpg";
import { linkGen } from "../../../utils/textUtils";

export const lesson2Questions = [
  {
    id: 5,
    title: "Wallets on Flow",
    subtitle:
      "An overview of crypto wallets for the Flow blockchain, including popular choices.",
    summary: `Flow also has crypto wallets which can be used to connect to NFT projects and applications built on Flow. The two most widely used and integrated wallets across Flow applications and products are Blocto and Dapper, however, Ledger, Finoa and Kraken are also providers.
       <br/> <br/> ${linkGen(
         "https://blocto.io/",
         "Blocto"
       )} is a cross-chain wallet with a user-friendly interface, enabling users to connect to various Flow ecosystem applications and store tokens from multiple chains. On the other hand, ${linkGen(
      "https://www.meetdapper.com/",
      "Dapper"
    )} is a user-friendly wallet built by the Dapper team, integrated with a limited number of Flow Blockchain applications like NBA Top Shot, Genies, and others.`,
    img: q5,
    question:
      "Which wallet allows storing tokens from multiple chains including Flow, Ethereum, and Binance Smart Chain?",
    options: {
      1: { id: 1, value: "Dapper wallet" },
      2: { id: 2, value: "Blocto wallet" },
      3: { id: 3, value: "Metamask wallet" },
    },
    answer: 2,
    classes: "lg:w-2/3",
  },
  {
    id: 6,
    title: "Exploring Cadence",
    subtitle: "An innovative smart contract programming language",
    summary:
      "Cadence is a smart contract programming language designed for the Flow Blockchain. Its unique features include a strong static type system, resource-oriented programming, built-in pre-conditions and post-conditions for functions and transactions, and the use of capability-based security.",
    img: q5,
    question: "What is Cadence in the context of the Flow blockchain?",
    options: {
      1: { id: 1, value: "A blockchain explorer" },
      2: { id: 2, value: "A smart contract programming language" },
      3: { id: 3, value: "A type of cryptocurrency" },
    },
    answer: 2,
    classes: "lg:w-1/3",
  },
  {
    id: 7,
    title: "Understanding Accounts, Transactions, and Domains in Flow",
    subtitle:
      "Getting to grips with accounts, transactions, and the role of domains in the file system.",
    summary:
      "Let's get familiar with accounts and transactions. Accounts store all state and interfaces for state interaction. An account has two main areas: the contract area, where smart contracts and interfaces reside, and the file system, housing objects and their access capabilities. Objects are stored in a domain (storage, private, or public) and linked via a path. Paths consist of a domain and an identifier. For instance, in a storage domain, all objects (like structs, tokens, or NFTs) are saved, accessible only by the account owner. The private domain functions like a private API, allowing only the owner and authorised accounts to call certain functions. Meanwhile, the public domain is an account's public API where the owner can link capabilities accessible by anyone on the network. Code execution happens within transactions, submitted by external users to interact with the persistent state, including direct modification of account storage.",
    img: q6,
    question:
      "What is the purpose of the 'public' domain in an account's file system?",
    options: {
      1: {
        id: 1,
        value:
          "It's where all objects such as structs and resource objects are stored.",
      },
      2: {
        id: 2,
        value:
          "It's an account's public API where the owner can link capabilities that anyone else in the network can access.",
      },
      3: {
        id: 3,
        value:
          "It's a private API that only the owner and the accounts with access can use.",
      },
    },
    answer: 2,
    classes: "lg:w-1/3",
  },
  {
    id: 8,
    title: "Introduction to the Playground",
    subtitle:
      "Understanding the web editor and functionality in smart contract deployment",
    summary: `The ${linkGen(
      "https://play.onflow.org/",
      "Flow Playground"
    )} is a web editor for contract development using cadence. editor interface features a list of accounts on the left. Clicking on an account displays its associated contract in the main editor window. On the right, there's a 'deploy' button that deploys the open contract to the selected account. Below, the console area shows logs or errors from deployments, transactions, or scripts. After deploying a contract, the console confirms the success and the associated account now shows the contract name. Although the playground allows only one contract per account, multiple contracts can be stored in the same account during development.`,
    img: q7,
    question: "What happens when you click the 'Deploy' button?",
    options: {
      1: { id: 1, value: "It deletes the current contract." },
      2: {
        id: 2,
        value: "It deploys the visible contract to the selected account.",
      },
      3: { id: 3, value: "It creates a new contract." },
    },
    answer: 2,
    classes: "lg:w-2/3",
  },
];
