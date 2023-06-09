import q1 from "../../../assets/img/questions/greenfield/q1.png";
import q2 from "../../../assets/img/questions/greenfield/q2.png";
import q3 from "../../../assets/img/questions/greenfield/q3.png";
import q4 from "../../../assets/img/questions/greenfield/q4.png";
import { linkGen } from "../../../utils/textUtils";

export const lesson1Questions = [
  {
    id: 1,
    title:
      "Understanding Space and Time (SxT): A Decentralized Blockchain-Based Data Warehouse",
    subtitle:
      "Exploring how SxT empowers sub-second queries and enterprise-scale analytics in a tamperproof way.",
    summary:
      "Space and Time (SxT) is a revolutionary decentralized data warehouse preloaded with indexed blockchain data from various major chains. SxT allows for seamless integration of on-chain and off-chain datasets using SQL. Results can be published to a range of platforms such as smart contracts, dapps, BI tools, and ML models. Underpinning SxT's operation is 'Proof of SQL', an innovative zk cryptography ensuring queries in SxT are tamperproof. This technology enables rapid queries and large-scale analytics, anchoring a new data landscape for Web3.",
    img: q1,
    question:
      "What unique feature of Space and Time (SxT) ensures that the queries run in its system are verifiably tamperproof?",
    options: {
      1: { id: 1, value: "Blockchain Technology" },
      2: { id: 2, value: "Proof of SQL" },
      3: { id: 3, value: "Decentralization" },
    },
    answer: 2,
    classes: "lg:w-2/3",
  },

  {
    id: 2,
    title: "Space and Time (SxT) is in Beta",
    subtitle: "Get access to SxT while still in their initial beta phase",
    summary: `Space and Time (SxT) is presently in its beta phase. You might find some that key details are intentionally obscured in their documentation to manage the high demand and limited resources available. Developers are gradually admitted to the network. Registration for beta access is open to everyone. Once admitted, you will receive a welcome email containing essential information, including the API base URL, link to SxT's dapp, and a unique join code specific to their organization.
    <br /><br />  
    You can ${linkGen(
      "https://www.spaceandtime.io/access-beta",
      "sign up for beta access here"
    )}.`,
    img: q2,
    question:
      "What key details are delivered in the welcome email for those who get access to the Space and Time (SxT) beta phase?",
    options: {
      1: { id: 1, value: "Personal user details and login credentials" },
      2: {
        id: 2,
        value: "API base URL, dapp link, and organization-specific join code",
      },
      3: {
        id: 3,
        value: "List of other beta participants and their contact information",
      },
    },
    answer: 2,
    classes: "lg:w-1/3",
  },

  {
    id: 3,
    title: "The SxT dapp: Exploring Blockchain Data and More",
    subtitle:
      "Discover the functionalities and benefits of the SxT dapp for blockchain data exploration.",
    summary: `Space and Time (SxT) offers a comprehensive dapp frontend for exploring blockchain data, running queries, and publishing to tailor-made dashboards. The dapp allows users to visualize blockchain data, run queries, create tables, and load personal data by simply linking their wallet. An OpenAI-powered chatbot, assisted by ChainML, provides guidance and code generation using natural language queries. Users can automatically publish their queries to APIs, dashboards, dapps, blockchains, and other databases using OpenAI, while also customizing their dashboard to suit their brand.
      <br /><br />
      The SxT dapp is also available ${linkGen(
        "https://www.spaceandtime.io/access-beta",
        "in Beta"
      )}.`,
    img: q3,
    question:
      "What unique feature does the SxT dapp offer for helping users navigate and write queries?",
    options: {
      1: { id: 1, value: "A downloadable user manual" },
      2: { id: 2, value: "An OpenAI-enabled chatbot powered by ChainML" },
      3: { id: 3, value: "A dedicated customer support line" },
    },
    answer: 2,
    classes: "lg:w-1/3",
  },

  {
    id: 4,
    title: "Choosing Your Interface: Ways to Connect to Space and Time (SxT)",
    subtitle:
      "Explore the three different methods for connecting and interacting with the SxT platform.",
    summary: `Space and Time (SxT) currently offers three distinct ways for users to connect to its network: REST APIs, JDBC driver, and the SxT dapp. 
    <br /><br />
    The REST APIs are suitable for building dapps or integrating SxT into other development environments. It includes APIs for security, SQL operations, resource discovery, streaming operations, content, subscriptions, user activity, and secrets proxy.
    <br /><br />
     The JDBC driver caters to locally-installed applications, instructions vary depending on the specific tool setup. Then there is the SxT dapp (currently in beta) provides a user-friendly interface ideal for building dashboards.`,
    img: q4,
    question:
      "Which interface is suggested for building dashboards in the Space and Time (SxT) platform?",
    options: {
      1: { id: 1, value: "REST APIs" },
      2: { id: 2, value: "JDBC driver" },
      3: { id: 3, value: "SxT dapp" },
    },
    answer: 3,
    classes: "lg:w-2/3",
  },
];
