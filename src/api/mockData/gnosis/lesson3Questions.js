import q9 from "../../../assets/img/questions/gnosis/q9.png";
import q10 from "../../../assets/img/questions/gnosis/q10.png";
import q11 from "../../../assets/img/questions/gnosis/q11.png";
import q12 from "../../../assets/img/questions/gnosis/q12.png";
import { linkGen, strongGen } from "../../../utils/textUtils";

export const lesson3Questions = [
  {
    id: 9,
    title: "Add Chaido Testnet Network to metamask",
    subtitle:
      "Add Chaindo Testnet Network to your MetaMask to interact deploy a contract",

    summary: `
              Chiado is a Gnosis testnet that was launched in October 2022. 
              Chiado's primary purpose is to be a long-lived testnet with tooling for developers
              To add Chaido to your metamask, follow this guide:
              <li> Click <a class="text-jetbrown underline" target="_blank" href="https://shanejonas.github.io/metamask-link/deep?method=wallet_addEthereumChain&params%5B0%5D%5BchainId%5D=0x27D8&params%5B0%5D%5BchainName%5D=Chiado&params%5B0%5D%5BrpcUrls%5D%5B0%5D=https://rpc.chiadochain.net&params%5B0%5D%5BnativeCurrency%5D%5Bname%5D=Chiado%20xDAI&params%5B0%5D%5BnativeCurrency%5D%5Bsymbol%5D=xDAI&params%5B0%5D%5BnativeCurrency%5D%5Bdecimals%5D=18&params%5B0%5D%5BblockExplorerUrls%5D%5B0%5D=https://blockscout.com/gnosis/chiado">Add Chaido testnet</a>.</li>
              <li>When MetaMask prompts a window, click <strong>Approve.</strong></li>
              <li>When MetaMask prompts another window, click <strong>Switch network.</strong></li>
              <li>After that come back here and verify.</li>
              </ol>
             `,
    img: q9,
    question:
      "Once you connect your wallet, we will check if you've switched to the correct network.",
    answer: 10200,
    type: "verify-network",
    classes: "lg:w-1/2",
  },
  {
    id: 10,
    title: "Get test xDai",
    subtitle:
      "Get testnet xDai on the Chaido network from the faucet to deploy your contract.",

    summary: `You will also need a small amount of xDai to deploy a contract on Chaido. To get xDai:
              <ol class="list-decimal pl-5">
                <li>Visit <a class="text-jetbrown underline" target="_blank" href="https://www.gnosisfaucet.com/">Gnosisfaucet.com</a>.</li>
                <li>For network select <strong>Chiado Testnet (xDAI)</strong></li>
                <li>Copy and paste you metamask wallet address in the address input</li>
                <li>Verify and click the <strong>Request Chiado xDAI</strong> button</li>
                <li>After some time the xDai will you reflect in your wallet.</li>
                <li>After that come back here and verify.</li>
              </ol>
             `,
    img: q10,
    question:
      "Once you connect your wallet, we will check if you've have tBnB.",
    answer: 0.0001,
    type: "verify-balance",
    classes: "lg:w-1/2",
  },
  {
    id: 11,
    title: "Deploying your contract",
    subtitle: "Deploy a contract on the gnosis chain using the Remix IDE",
    summary: `
              Remix is a web-based IDE for deploying smart contracts. To deploy a contract on gnosis:
              <ol class="list-decimal pl-5">
                <li>Head over to ${linkGen(
                  "https://remix-project.org/",
                  "Remix IDE"
                )}.</li>
                <li>Click <strong>contracts</strong> folder and select ${strongGen(
                  "Storage.sol"
                )}. This is a simple contract that stores and retrieves a number. </li>
                <li>Next, click the complile icon (as shown in the image) and then the button ${strongGen(
                  "Compile 1_Storage.sol"
                )}</li>
                <li>Next click the deploy icon (as shown in the image)</li>
                <li>In the options for Environment select ${strongGen(
                  "InjectedProvider - Metamask"
                )}</li>
                <li>Ensure the address in the account option matches your address. Then click the ${strongGen(
                  "Deploy"
                )} button </li>
                <li>Confirm the transaction in Metamask</li>
              </ol>
             `,
    img: q11,
    question: "Have you compiled and deployed your contract?",
    options: {
      1: { id: 1, value: "Yes I have!" },
    },
    answer: 1,
    classes: "lg:w-1/3",
  },

  {
    id: 7,
    title: "Verifying your contract",
    subtitle: "Let's verify your contract on the gnosis chain.",

    summary: `
              When you compile a Solidity smart contract, it generates an ABI and bytecode. If you deployed the ${strongGen(
                "Storage.sol"
              )} contract we have an ABI similar to yours. We are going to store and retrieve a number from your contract. Storing a number in your contract will cost you a small amount of xDai. You would need to approve the transaction in Metamask.
              To get your contract address:
              <ol class="list-decimal pl-5">
              <li>On the deploy section of Remix, go to ${strongGen(
                "Deployed Contracts"
              )}</li>
              <li>Click the copy Icon to copy the address of your deployed contract then come back here to verify your contract</li>
              </ol>
             `,
    img: q12,
    question: "Paste the Address you copied in the text box below.",
    answer: true,
    type: "verify-storage-contract",
    hasInput: true,
    classes: "lg:w-full",
  },
];
