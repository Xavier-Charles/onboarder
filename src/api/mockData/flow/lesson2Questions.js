import q5 from "../../../assets/img/questions/greenfield/q5.png";
import q6 from "../../../assets/img/questions/gnosis/q6.png";
// import q7 from "../../../assets/img/questions/greenfield/q7.png";
import q8 from "../../../assets/img/questions/gnosis/q8.png";

export const lesson2Questions = [
  {
    id: 5,
    title: "Mantle's Improvements over L2 Solutions",
    subtitle:
      "Enhancements in data availability, trust minimization, and block production",
    summary:
      "Mantle introduces several improvements compared to traditional Layer 2 solutions. It offers modular data availability through EigenLayer, enabling increased transaction throughput without compromising security. Mantle uses Multi-Party Computation (MPC) and Threshold Signature Scheme (TSS) technology to minimize trust risks in L2 execution results. Additionally, Mantle aims to decentralize its Sequencer, reducing the potential for single points of failure or censorship.",
    img: q5,
    question:
      "What technology does Mantle use to minimize trust risks in L2 execution results?",
    options: {
      1: { id: 1, value: "Modular Data Availability" },
      2: { id: 2, value: "Multi-Party Computation (MPC)" },
      3: { id: 3, value: "Decentralized Sequencer" },
    },
    answer: 2,
    classes: "lg:w-1/2",
  },

  {
    id: 6,
    title: "Solving Data Availability with Mantle",
    subtitle: "Using EigenLayer's Data Availability Solution",
    summary:
      "Mantle is exploring EigenLayer's Data Availability solution, EigenDA, to ensure block data completeness and correctness on the Mantle execution layer. The solution allows nodes to provide data availability services to the Mantle network and participate in Mantle's economic model via $BIT staking. EigenDA employs a unicast channel for data exchange between network participants and maintains an erasure rate to ensure block data can be reconstructed.",
    img: q6,
    question:
      "What is Mantle exploring to ensure data availability on their execution layer?",
    options: {
      1: {
        id: 1,
        value: "Building their own data availability solution from scratch",
      },
      2: {
        id: 2,
        value: "Using EigenLayer's Data Availability solution, EigenDA",
      },
      3: {
        id: 3,
        value: "Relying on Ethereum's trust network for data availability",
      },
    },
    answer: 2,
    classes: "lg:w-1/2",
  },
  {
    id: 7,
    title: "Decentralized Sequencer for Mantle",
    subtitle: "Introducing Next-Generation Trustlessness",
    summary:
      "Mantle is addressing concerns regarding the security and operational risks of relying on a single Sequencer in Optimistic Rollups by introducing a decentralized Sequencer. This will allow anyone to join a permissionless set of Layer 2 block producers, bringing more liveness and resilience to Mantle. Nodes that act as Sequencers will receive $BIT rewards and benefit from any MEV available through block production.",
    img: q8,
    question:
      "What is Mantle's solution to the concerns of relying on a single Sequencer in Optimistic Rollups?",
    options: {
      1: { id: 1, value: "Creating a single point of failure in the system" },
      2: {
        id: 2,
        value:
          "Decentralizing the Sequencer and allowing anyone to join a permissionless set of L2 block producers",
      },
      3: {
        id: 3,
        value: "Eliminating the need for Sequencers in Optimistic Rollups",
      },
    },
    answer: 2,

    classes: "lg:w-1/3",
  },
  {
    id: 8,

    title: "Fraud Proofs with EVM-Native Verification",
    subtitle: "Minimizing Trust Assumptions in Optimistic Rollups",
    summary:
      "Mantle's fraud proofs use EVM-level instructions to minimize trust assumptions and guarantee that fraud proofs are derived directly from a compliant EVM client. This allows for all Ethereum clients to interact with a common proof system permissionlessly.",
    img: q8,
    question: "What is the main benefit of Mantle's fraud proof system?",
    options: {
      1: {
        id: 1,
        value: "Reducing the need for fraud proofs in Optimistic Rollups",
      },
      2: {
        id: 2,
        value:
          "Minimizing trust assumptions and guaranteeing fraud proofs are derived directly from a compliant EVM client",
      },
      3: {
        id: 3,
        value: "Using a MIPS or WASM virtual machine to execute fraud proofs",
      },
    },
    answer: 2,
    classes: "lg:w-1/3",
  },
  {
    id: 9,
    title: "Transaction Lifecycle on Mantle",
    subtitle: "From Initiation to Storage",
    summary:
      "Transactions on Mantle are initiated by wallet users, dApps, or scripts and are processed by a Sequencer node. The transaction triggers a state verification process to ensure it is valid and paid the necessary fees. Pending blocks are combined to form batches that are verified by Multi-Party Computation nodes before being transmitted to Ethereum for storage.",
    img: q8,
    question:
      "What is the purpose of Multi-Party Computation nodes in the transaction lifecycle on Mantle?",
    options: {
      1: { id: 1, value: "To process transactions and update the local state" },
      2: {
        id: 2,
        value:
          "To verify the correctness of block data submitted by the Sequencer before it is transmitted to Ethereum",
      },
      3: {
        id: 3,
        value:
          "To sync block data and make it accessible for other users and dApps",
      },
    },
    answer: 2,

    classes: "lg:w-1/3",
  },
];
