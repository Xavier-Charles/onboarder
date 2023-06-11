import q5 from "../../../assets/img/questions/greenfield/q5.png";
import q6 from "../../../assets/img/questions/greenfield/q6.png";
import q7 from "../../../assets/img/questions/greenfield/q7.png";
import q8 from "../../../assets/img/questions/greenfield/q8.png";
import { linkGen, strongGen } from "../../../utils/textUtils";

export const lesson2Questions = [
  {
    id: 5,
    title: "Get Goerli ETH & LINK",
    subtitle:
      "Prepping your wallet with goerli testnet ETH and LINK to deploy the truflation tester contract",
    summary: `You'll. need goerli testnet ETH and LINK to deploy the truflation tester contract
               Get Link at the ${linkGen(
                 "https://faucets.chain.link/goerli",
                 "Chain Link faucet"
               )}. Get gEth at the ${linkGen(
      "https://goerlifaucet.com/",
      "Alchemy faucet"
    )}.`,
    img: q5,
    question:
      "Once you connect your wallet, we will check if you've have gEth.",
    answer: 0.0001,
    type: "verify-balance",
    classes: "lg:w-1/3",
  },
  {
    id: 6,
    title: "Compiling Truflation Tester",
    subtitle: "Compiling the truflation tester contract to the goerli testnet",
    summary: ` 
      <ul class="list-decimal pl-5">
        <li>First off, go to the  ${linkGen(
          "https://remix.ethereum.org/#url=https://raw.githubusercontent.com/truflation/quickstart/main/TruflationTester.sol",
          "Truflation contract in Remix IDE"
        )}
        </li>
        <li>Next, click the complile icon (as shown in the image) and then the button ${strongGen(
          "Compile TruflationTester.sol"
        )}</li>
        <li>Next click the deploy icon (as shown in the image) to go to the deploy options</li>
        
      </ul>
    `,
    img: q6,
    question: "Have you compiled and deployed your contract?",
    options: {
      1: { id: 1, value: "Yes I have!" },
      2: { id: 1, value: "No I have not" },
    },
    answer: 1,
    classes: "lg:w-2/3",
  },
  {
    id: 7,
    title: "Deploying Truflation Tester",
    subtitle: "Deploying the truflation tester contract to the goerli testnet",

    summary: `In the deploy options for Environment select ${strongGen(
      "InjectedProvider - Metamask"
    )} Insert the oracle id, job id, and fee (wei) using the values below:
        <ul>
        <li>oracleId:  ${strongGen(
          "0x6888BdA6a975eCbACc3ba69CA2c80d7d7da5A344"
        )}</li>
        <li>jobId:  ${strongGen("d220e5e687884462909a03021385b7ae")}</li>
        <li>fee:  ${strongGen("500000000000000000")}</li>
        <li>token:  ${strongGen(
          "0x326C977E6efc84E512bB9C30f76E30c160eD06FB"
        )}</li>
        </ul>
    Then ensure the address in the account option matches your address. Then click the ${strongGen(
      "Deploy"
    )} button. Confirm the transaction in Metamask.
         `,
    img: q7,
    question: "Have you deployed your contract?",
    options: {
      1: { id: 1, value: "Yes I have!" },
      2: { id: 1, value: "No I have not" },
    },
    answer: 1,
    classes: "lg:w-1/3",
  },
  {
    id: 8,
    title: "Interacting with your deployed contract",
    subtitle:
      "Interacting with your deployed contract to get the latest truflation CPI",
    summary: `To connect SxT to Mumbai via Chainlink Functions you need to:
       <ol class="list-decimal pl-5"> 
        <li> When confirmed, your deployed contract will be visible in "deployed contracts" below the "deploy" button that you just pressed</li>
        <li> Press the "copy" icon to the right of your contract name (shown as something like "TRUFLATIONTESTER AT 0x000..0000 (BLOCKCHAIN)") to get your contract's address</li>
        <li> Send some Goerli (or relevant network) LINK directly to your smart contract's address via Metamask or other wallet (0.5 LINK per call - ** if you have a transaction revert issue this means that you did not send the LINK **</li>
        <li> Click on the down arrow to open up the interface to the deployed contracts</li>
        <li> Press the orange requestYoYInflation button to fetch inflation data from Chainlink and store the result in your contract</li>
        <li> When confirmed, press the blue yoyInflation button to see the result</li>
       </ol>`,
    img: q8,
    question: "What yoyInflation value do you see?",
    options: {
      1: {
        id: 1,
        value: "12",
      },
      2: {
        id: 2,
        value:
          "14",
      },
      3: { id: 3, value: "8" },
    },
    answer: 3,
    classes: "lg:w-2/3",
  },
];
