import q9 from "../../../assets/img/questions/theta/q9.jpg";
import q10 from "../../../assets/img/questions/theta/q10.png";
import q3 from "../../../assets/img/questions/theta/q3.png";
import q4 from "../../../assets/img/questions/theta/q4.png";
import { linkGen, strongGen } from "../../../utils/textUtils";

export const lesson3Questions = [
  {
    id: 9,
    title: "Unveiling the Metachain",
    subtitle:
      "Exploring the concept of the Theta Metachain and its potential for unlimited transactional throughput",
    summary:
      "The Theta Metachain is an interconnected network of blockchains, designed to allow permissionless horizontal scaling of the Theta blockchain network, potentially achieving unlimited transactional throughput and 1-2 seconds, or even subsecond block finalization time. It consists of a 'main chain' and an unlimited number of 'subchains', all EVM-compatible, and using TFuel as the gas token. This setup provides a unified interface for users and developers, and with a built-in interchain messaging channel, allows crypto assets to flow freely across chains. As each subchain operates independently, the Theta Metachain opens up possibilities for infinite scaling of the blockchain's processing capacity. It can also be extended into a zk-rollup for higher security guarantees.",
    img: q9,
    question:
      "What key feature of the Theta Metachain allows for potential unlimited transactional throughput?",
    options: {
      1: { id: 1, value: "The use of TFuel as the gas token" },
      2: {
        id: 2,
        value: "Its structure of one main chain and unlimited subchains",
      },
      3: { id: 3, value: "Its EVM compatibility" },
    },
    answer: 2,
    classes: "lg:w-1/2",
  },
  {
    id: 10,
    title: "Theta on metamask",
    subtitle: "Add Theta Mainnet and Testnet Network to your MetaMask",

    summary: `
              Theta blockchain is fully interoperable with Metamask
              To add Theta to your metamask, follow this guide: 
              <li> Click <a class="text-jetbrown underline" target="_blank" href="https://shanejonas.github.io/metamask-link/deep?method=wallet_addEthereumChain&params[0][chainId]=0x169&params[0][chainName]=Theta Mainnet&params[0][rpcUrls][0]=https://eth-rpc-api.thetatoken.org/rpc&params[0][nativeCurrency][name]=Theta TFUEL&params[0][nativeCurrency][symbol]=TFUEL&params[0][nativeCurrency][decimals]=18&params[0][blockExplorerUrls][0]=https://explorer.thetatoken.org/">Add Theta testnet</a>.</li>
              <li>When MetaMask prompts a window, click <strong>Approve.</strong></li>
              <li>When MetaMask prompts another window, click <strong>Switch network.</strong></li>
              <li> Click <a class="text-jetbrown underline" target="_blank" href="">Add Theta testnet</a>.</li>
              <li>Follow the same steps above to add the Testnet</li>
              <li>After that come back here and verify you have added the testnet.</li>
              </ol>
             `,
    img: q10,
    question:
      "Once you connect your wallet, we will check if you've switched to the correct network.",
    answer: 365,
    type: "verify-network",
    classes: "lg:w-1/2",
  },
  {
    id: 11,
    title: "Get test TFuel",
    subtitle:
      "Get testnet TFuel on the Theta network from the faucet to deploy your contract.",

    summary: `You will also need a small amount of TFuel to deploy a contract on Theta. To get TFuel:
              <ol class="list-decimal pl-5">
                <li>Visit <a class="text-jetbrown underline" target="_blank" href="https://explorer.thetatoken.org/">explorer.thetatoken.org</a>.</li>
                <li>For network select <strong>Theta Testnet (TFuel)</strong></li>
                <li>Copy and paste you metamask wallet address in the address input</li>
                <li>Verify and click the <strong>Request Theta TFuel</strong> button</li>
                <li>After some time the TFuel will you reflect in your wallet.</li>
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
    id: 12,
    title: "Deploying your contract",
    subtitle: "Deploy a contract on the Theta chain using the Remix IDE",
    summary: `
              Remix is a web-based IDE for deploying smart contracts. To deploy a contract on Theta:
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
    img: q3,
    question: "Have you compiled and deployed your contract?",
    options: {
      1: { id: 1, value: "Yes I have!" },
    },
    answer: 1,
    classes: "lg:w-full",
  },

  {
    id: 13,
    title: "Verifying your contract",
    subtitle: "Let's verify your contract on the Theta chain.",

    summary: `
              When you compile a Solidity smart contract, it generates an ABI and bytecode. If you deployed the ${strongGen(
                "Storage.sol"
              )} contract we have an ABI similar to yours. We are going to store and retrieve a number from your contract. Storing a number in your contract will cost you a small amount of TFuel. You would need to approve the transaction in Metamask.
              To get your contract address:
              <ol class="list-decimal pl-5">
              <li>On the deploy section of Remix, go to ${strongGen(
                "Deployed Contracts"
              )}</li>
              <li>Click the copy Icon to copy the address of your deployed contract then come back here to verify your contract</li>
              </ol>
             `,
    img: q4,
    question: "Paste the Address you copied in the text box below.",
    answer: true,
    type: "verify-storage-contract",
    hasInput: true,
    classes: "lg:w-full",
  },
];
