import q5 from "../../../assets/img/questions/greenfield/q5.png";
import q6 from "../../../assets/img/questions/greenfield/q6.png";
import q7 from "../../../assets/img/questions/greenfield/q7.png";
import q8 from "../../../assets/img/questions/greenfield/q8.png";

export const lesson2Questions = [
  {
    id: 5,
    title: "Setting up your Wallet",
    subtitle:
      "Learn how to use the MetaMask extension to interact with Greenfield Testnet",

    summary: `<p>You will learn how to use the MetaMask extension to interact with Greenfield Testnet and Greenfield BSC Testnet which is a fork of BSC and deployed dedicated for Greenfield Testnet.</p>
              <strong>Greenfield BSC Testnet is a temporary testnet for Greenfield, and it will be replaced by BSC Testnet in the future.</strong>
              <p>We assume you have installed MetaMask and have an account, if not, please refer to <a class="text-jetbrown underline" target="_blank" href="https://metamask.io/download/">MetaMask</a> to install it</p>.
             `,
    img: q5,
    question: "Which of these is a temporary Testnet?",
    options: {
      1: { id: 1, value: "Greenfield BSC Testnet" },
      2: { id: 2, value: "Greenfield Testnet" },
    },
    answer: 2,
    classes: "lg:w-9/12",
  },
  {
    id: 6,
    title: "Add Greenfield BSC Testnet Network",
    subtitle:
      "Add Greenfield BSC Testnet Network to MetaMask to interact with the testnet",

    summary: `<ol class="list-decimal pl-5">
              <li>Visit <a class="text-jetbrown underline" target="_blank" href="https://www.bnbchainlist.org/">BNBChain List</a>.</li>
              <li>Click <strong>Connect Wallet.</strong></li>

              <li> Find Greenfield BSC Testnet, and click <strong>Add To Metamask.</strong></li>

              <li>When MetaMask prompts a window, click <strong>Approve.</strong></li>
              <li>When MetaMask prompts another window, click <strong>Switch network.</strong></li>
              <li>After that come back here and verify.</li>
              </ol>
             `,
    img: q6,
    question:
      "Once you connect your wallet, we will check if you've switched to the correct network.",
    answer: 5601,
    type: "verify-network",
    classes: "lg:w-4/12",
  },
  {
    id: 7,
    title: "Add Greenfield Testnet Network",
    subtitle:
      "Add Greenfield Blockchain Testnet Network to MetaMask to interact with the testnet",

    summary: `<ol class="list-decimal pl-5">
              <li>Visit <a class="text-jetbrown underline" target="_blank" href="https://www.bnbchainlist.org/">BNBChain List</a>.</li>
              <li>Click <strong>Connect Wallet.</strong></li>

              <li> Find Greenfield Blockchain Testnet, and click <strong>Add To Metamask.</strong></li>

              <li>When MetaMask prompts a window, click <strong>Approve.</strong></li>
              <li>When MetaMask prompts another window, click <strong>Switch network.</strong></li>
              <li>After that come back here and verify</li>
              </ol>
             `,
    img: q7,
    question:
      "Once you connect your wallet, we will check if you've switched to the correct network.",
    answer: 5600,
    type: "verify-network",
    classes: "lg:w-4/12",
  },
  {
    id: 8,
    title: "Get test BNB",
    subtitle: "Get testnet BNB on the greenfield network from the faucet.",

    summary: `<ol class="list-decimal pl-5">
              <li>Visit <a class="text-jetbrown underline" target="_blank" href="https://gnfd-bsc-faucet.bnbchain.org/">Greenfield BSC Testnet Faucet</a>.</li>
              <li>Click Tweet to make a tweet.</li>

              <li>Replace <strong>0x000000000000000000000000000000000000000</strong> with your BSC address.</li>

              <li>Find your tweet URL and copy it to request for tBNBs.</li>
              <li>After receiving tBNBs, you can check them in your wallet.</li>

              <li>After that come back here and verify.</li>
              </ol>
             `,
    img: q8,
    question:
      "Once you connect your wallet, we will check if you've have tBnB.",
    answer: 0.0001,
    type: "verify-balance",
    classes: "lg:w-9/12",
  },
];
