import q5 from "../../assets/img/questions/q5.png";
import q6 from "../../assets/img/questions/q6.png";
import q7 from "../../assets/img/questions/q7.png";
import q8 from "../../assets/img/questions/q8.png";

export const entryQuestions = [
  {
    id: 5,
    title: "Wallet Configuration",
    subtitle:
      "Learn how to use the MetaMask extension to interact with Greenfield Testnet",

    summary: `<p>You will learn how to use the MetaMask extension to interact with Greenfield Testnet and Greenfield BSC Testnet which is a fork of BSC and deployed dedicated for Greenfield Testnet.</p>
              <strong>Greenfield BSC Testnet is a temporary testnet for Greenfield, and it will be replaced by BSC Testnet in the future.</strong>
              We assume you have installed MetaMask and have an account, if not, please refer to <a href="https://metamask.io/download/">MetaMask</a> to install it.
             `,
    img: q5,
    question: "Which of these is a temporary Testnet?",
    options: {
      1: { id: 1, value: "Greenfield BSC Testnet" },
      2: { id: 2, value: "Greenfield Testnet" },
    },
    answer: 2,
    classes: "lg:w-2/3",
  },
  {
    id: 6,
    title: "Add Greenfield BSC Testnet Network",
    subtitle:
      "Add Greenfield BSC Testnet Network to MetaMask to interact with the testnet",

    summary: `<ol>
              <li>Visit <a href="https://www.bnbchainlist.org/">BNBChain List</a>.</li>
              <li>Click <strong>Connect Wallet.</strong></li>

              <li> Find Greenfield BSC Testnet, and click <strong>Add To Metamask.</strong></li>

              <li>When MetaMask prompts a window, click <strong>Approve.</strong></li>
              <li>After that come back here and verify.</li>
              </ol>
             `,
    img: q6,
    answer: 5601,
    classes: "lg:w-1/2",
  },
  {
    id: 7,
    title: "Add Greenfield Testnet Network",
    subtitle:
      "Exploring BNB Greenfield's Wide Range of Innovative Applications and User Control Capabilities",

    summary: `<ol>
              <li>Visit <a href="https://www.bnbchainlist.org/">BNBChain List</a>.</li>
              <li>Click <strong>Connect Wallet.</strong></li>

              <li> Find Greenfield Blockchain Testnet, and click <strong>Add To Metamask.</strong></li>

              <li>When MetaMask prompts a window, click <strong>Approve.</strong></li>
              <li>After that come back here and verify</li>
              </ol>
             `,
    img: q7,
    answer: 5600,
    classes: "lg:w-1/2",
  },
  {
    id: 8,
    title: "Get test BNB",
    subtitle:
      "Advancing Data Independence and Ownership for a Brighter, More Transparent Web3 Future",

    summary: `<ol>
              <li>Visit <a href="https://gnfd-bsc-faucet.bnbchain.org/">Greenfield BSC Testnet Faucet</a>.</li>
              <li>Click Tweet to make a tweet.</li>

              <li>Replace <strong>0x000000000000000000000000000000000000000</strong> with your BSC address.</li>

              <li>Find your tweet URL and copy it to request for tBNBs.</li>
              <li>After receiving tBNBs, you can check them in your wallet.</li>

              <li>After that come back here and verify.</li>
              </ol>
             `,
    img: q8,
    answer: 1,
    classes: "lg:w-2/3",
  },
];
