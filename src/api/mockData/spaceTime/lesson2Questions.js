import q5 from "../../../assets/img/questions/greenfield/q5.png";
import q6 from "../../../assets/img/questions/greenfield/q6.png";
import q7 from "../../../assets/img/questions/greenfield/q7.png";
import q8 from "../../../assets/img/questions/greenfield/q8.png";
import { linkGen, strongGen } from "../../../utils/textUtils";

export const lesson2Questions = [
  {
    id: 5,
    title: "Creating a Dynamic NFT with Space and Time and Chainlink Functions",
    subtitle:
      "Understanding the process and possibilities of creating a dynamic NFT (dNFT) with SxT and Chainlink.",
    summary:
      "This guide describes the creation of a dynamic NFT (dNFT) using Space and Time and Chainlink Functions. The example given is a SwordNFT whose rating changes based on in-game usage. Dynamic NFTs differ from standard NFTs as their metadata is designed to evolve over time. Contrary to popular belief, there is nothing in the ERC721/ERC1155 standards that prevents NFT metadata from changing, and there is growing interest in dNFTs that can adapt or level up over time.",
    img: q5,
    question: "What differentiates a dynamic NFT (dNFT) from a standard NFT?",
    options: {
      1: { id: 1, value: "A dNFT has a changing price" },
      2: { id: 2, value: "A dNFT's metadata is designed to change over time" },
      3: { id: 3, value: "A dNFT can be copied and shared freely" },
    },
    answer: 2,
    classes: "lg:w-1/3",
  },
  {
    id: 6,
    title: "Setting Up for Creating a Dynamic NFT",
    subtitle:
      "Prerequisites and setup instructions for creating a dynamic NFT with SxT and Chainlink.",
    summary: `To create a dynamic NFT, you will need beta access to ${linkGen(
      "https://www.spaceandtime.io/access-beta",
      "Space and Time"
    )} and ${linkGen(
      "https://chainlinkcommunity.typeform.com/requestaccess?typeform-source=docs.chain.link",
      "Chainlink Functions"
    )}, with a basic understanding of how both work.
    <br />
    To setup:
    <ol class="list-decimal pl-5">
    <li> Clone the ${linkGen(
      "https://github.com/SxT-Community/SxT-dNFT",
      "SxT-DNFT repository" & "npm install"
    )}</li>
    <li>Use ${strongGen(
      "npx env-enc help"
    )} to see all available commands. An installed package, env-enc, encrypts your local environment variables. You'll need to set your root password and some environment variables like MUMBAI_RPC_URL, PRIVATE_KEY, ACCESS_TOKEN, POLYGONSCAN_API_KEY, and GITHUB_API_TOKEN.
    </li> 
    <li>Go to your ${linkGen(
      "https://github.com/settings/tokens?type=beta",
      "Github Settings"
    )} to generate a new token, and enabling read & write access for Gists.</li>`,
    img: q6,
    question:
      "What is one of the main tools used in the setup process for creating a dynamic NFT?",
    options: {
      1: { id: 1, value: "env-enc for encrypting local environment variables" },
      2: { id: 2, value: "MUMBAI_RPC_URL for configuring the network" },
      3: { id: 3, value: "ACCESS_TOKEN for accessing SxT" },
    },
    answer: 1,
    classes: "lg:w-2/3",
  },
  {
    id: 7,
    title: "Setup Data in SxT",
    subtitle:
      "Add Greenfield Blockchain Testnet Network to MetaMask to interact with the testnet",

    summary: `Go to ${linkGen(
      "https://gist.github.com/Xavier-Charles/61c65d6cc9e07fa6a864700d64bfacab",
      "This Gist"
    )} to find the SQL code for the queries in the steps below
    <ol class="list-decimal pl-5">
     <li>First, CREATE your table</li>
     <li>Load Table - This is where a game would be inserting its telemetry into SxT</li>
     <li>View data that is loaded</li>
     </ol >
             `,
    img: q7,
    question: `What data was returned for "SUM(POINTS)" from the query in step 3?`,
    options: {
      1: { id: 1, value: "100" },
      2: { id: 2, value: "121" },
      3: { id: 3, value: "111" },
    },
    answer: 3,
    classes: "lg:w-1/3",
  },
  {
    id: 8,
    title: "Connecting SxT to Mumbai via Chainlink Functions",
    subtitle:
      "Steps to connect SxT to Mumbai using Chainlink Functions and deploy a dNFT contract.",
    summary: `To connect SxT to Mumbai via Chainlink Functions you need to:
       <ol class="list-decimal pl-5"> 
       <li> first simulate the full interaction to identify potential issues using ${strongGen(
         "npx hardhat functions-simulate --gaslimit 300000"
       )}. </li>
       <li>Then, you deploy the contract to Mumbai with ${strongGen(
         "npx hardhat functions-deploy-client --network mumbai --verify true"
       )}. Get the contract address after deployment and set the temporary envar with
       ${strongGen("export CONTRACT_ADDRESS=<your_contract_address>")}
       </li>
       <li>The next step involves creating a Functions Subscription and funding it with LINK tokens with ${strongGen(
         "npx hardhat functions-sub-create --network mumbai --amount 2 --contract $CONTRACT_ADDRESS"
       )}. Then get the subscription id and set a shell envar for ${strongGen(
      "export SUB_ID=<CL_FUNCTIONS_SUB_ID>"
    )}
        <li>Finally, you run the request with ${strongGen(
          "npx hardhat functions-request --network mumbai --contract $CONTRACT_ADDRESS --subid $SUB_ID --gaslimit 300000"
        )} </li>
       </ol>`,
    img: q8,
    question:
      "What is an essential step in connecting SxT to Mumbai via Chainlink Functions?",
    options: {
      1: {
        id: 1,
        value: "Funding the Functions Subscription with LINK tokens",
      },
      2: {
        id: 2,
        value:
          "Setting a temporary environment variable for the contract address",
      },
      3: { id: 3, value: "Running a simulation of the full interaction" },
    },
    answer: 3,
    classes: "lg:w-1/3",
  },
  {
    id: 9,
    title: "Add more Telemetry",
    subtitle: "Adding more telemetry to SxT to make your dNFT dynamic",

    summary: `Go to ${linkGen(
      "https://gist.github.com/Xavier-Charles/5a44004e455a8ffc6997f1089fb72b0b",
      "this Gist"
    )} to find the SQL code for the queries in the steps below
    <ol class="list-decimal pl-5">
     <li>First run the insert query</li>
     <li>Then run the get data query</li>
     </ol >
     Next you'll need to puh this to Mumbai
     <ol class="list-decimal pl-5">
     <li>As always test and simulate with ${strongGen(
       "npx hardhat functions-simulate --gaslimit 300000"
     )}</li>
     <li>Then run ${strongGen(
       "npx hardhat functions-request --network mumbai --contract $CONTRACT_ADDRESS --subid $SUB_ID --gaslimit 300000"
     )} </li>
     </ol >
             `,
    img: q7,
    question: `Did you push this to Mumbai?`,
    options: {
      1: { id: 1, value: "Yes!" },
      2: { id: 2, value: "Not yet" },
    },
    answer: 1,
    classes: "lg:w-1/3",
  },
];
